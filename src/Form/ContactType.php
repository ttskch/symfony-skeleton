<?php

namespace App\Form;

//use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => [
                    'autofocus' => true,
                ],
                'constraints' => [
                    new Assert\NotBlank(),
                ],
            ])
            ->add('email', EmailType::class, [
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Email(),
                ],
            ])
            ->add('gender', ChoiceType::class, [
                'choices' => $genderChoices = [
                    'male' => 'male',
                    'female' => 'female',
                    'other' => 'other',
                ],
                'choice_attr' => function ($value, $key, $index) {
                    return [
                        'class' => 'form-check-inline',
                    ];
                },
                'data' => 'male',
                'expanded' => true,
                'multiple' => false,
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Choice(array_keys($genderChoices)),
                ],
                'label_attr' => [
                    'class' => 'radio-inline',
                ],
            ])
            ->add('interesting_services', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Service A' => 'Service A',
                    'Service B' => 'Service B',
                    'Service C' => 'Service C',
                ],
                'expanded' => true,
                'multiple' => true,
                'label_attr' => [
                    'class' => 'checkbox-inline',
                ],
            ])
            ->add('message', TextareaType::class, [
                'attr' => [
                    'rows' => 5,
                ],
                'constraints' => [
                    new Assert\NotBlank(),
                ],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Send',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // uncomment if you want to bind to a class
            //'data_class' => Contact::class,
        ]);
    }
}
