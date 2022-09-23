<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_default')]
    public function index(): Response
    {
        return $this->render('home.html.twig', [
            'data' => [
                [
                    'title' => 'Values',
                    'content' => 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
                ],
                [
                    'title' => 'Goals',
                    'content' => 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
                ],
                [
                    'title' => 'Hobbies',
                    'content' => 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
                ],
            ],

            'services' => [
                [
                    'title' => 'Web Design',
                    'content' => 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.',
                    'icon' => 'web'
                ],
                [
                    'title' => 'Graphic Design',
                    'content' => 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.',
                    'icon' => 'graphic'
                ],
                [
                    'title' => 'Online Marketing',
                    'content' => 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.',
                    'icon' => 'marketing'
                ],
                [
                    'title' => 'SEO',
                    'content' => 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.',
                    'icon' => 'seo'
                ],
            ],

            'skills' => [
                [
                    'title' => 'PhotoShop',
                    'bar_content' => 90
                ],
                [
                    'title' => 'Illustrator',
                    'bar_content' => 80
                ],
                [
                    'title' => 'InDesign',
                    'bar_content' => 90
                ],
                [
                    'title' => 'HTML / CSS',
                    'bar_content' => 70
                ],
            ],

            'education' => [
                [
                    'title' => 'Graphic Design Diploma',
                    'paragraph1' => 'Reeves College  /  June 2008 - May 2010',
                    'tag' => '4.0 GPA',
                    'paragraph2' => 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei.'
                ],
                [
                    'title' => 'CIT Diploma',
                    'paragraph1' => 'Lethbridge College  /  June 2006 - May 2008',
                    'tag' => '4.0 GPA',
                    'paragraph2' => 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei.'
                ],
            ],

            'experience' => [
                [
                    'title' => 'Lead WEb Designer',
                    'paragraph1' => 'ABC Company, Saskatoon  /  June 2011 - Present',
                    'tag' => '3 Years',
                    'paragraph2' => 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei.'
                ],
                [
                    'title' => 'Junior Designer',
                    'paragraph1' => 'XYZ Company, Lethbridge  /  June 2008 - May 2009',
                    'tag' => '1 Years',
                    'paragraph2' => 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei.'
                ],
                [
                    'title' => 'Web Developer',
                    'paragraph1' => 'The Company, Lethbridge  /  June 2007 - May 2008',
                    'tag' => '1 Years',
                    'paragraph2' => 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei.'
                ],
            ],

            'testimonials' => [
                [
                    'content' => '“Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”',
                    'cite' => 'John Doe'
                ],
                [
                    'content' => '“Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”',
                    'cite' => 'Marie Smith'
                ],
                [
                    'content' => '“Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”',
                    'cite' => 'Soko'
                ],


            ],
        ]);
    }
}
