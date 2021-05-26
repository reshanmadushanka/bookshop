<?php

namespace App\Controller;

use App\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class CategoryController extends AbstractController
{
    /**
     * @Route("/category", name="list")
     * @param CategoryRepository $categoryRepository
     */
    function list() {
        $repository = $this->getDoctrine()->getRepository(Category::class);
        $category = $repository->findAll();
        return new JsonResponse($category);
    }
}
