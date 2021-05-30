<?php

namespace App\DataFixtures;

use App\Entity\Book;
use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $categories = [
            [
                'name' => 'Children',
                'status' => true,
            ],
            [
                'name' => 'Fiction',
                'status' => true,
            ],
        ];

        $products = [
            [
                'title' => "The Test Book 1",
                'description' => "The Test Book 1 The Test Book",
                'category' => 2,
                'price' => 200,
                'count' => 1,
                'status' => true,
            ],
            [
                'title' => "The Test Book 2",
                'description' => "The Test Book 2 The Test Book",
                'category' => 1,
                'price' => 500,
                'count' => 1,
                'status' => true,
            ],
            [
                'title' => "The Test Book 3",
                'description' => "The Test Book 3 The Test Book",
                'category' => 2,
                'count' => 1,
                'price' => 600,
                'status' => true,
            ],
            [
                'title' => "The Test Book 4",
                'description' => "The Test Book 4 The Test Book",
                'category' => 1,
                'count' => 1,
                'price' => 100,
                'status' => true,
            ],
        ];

        foreach ($categories as $key => $category) {
            $category = new Category();
            $category->setName("Category " . $key);
            $category->setStatus(true);
            $manager->persist($category);
        }

        $manager->flush();

        foreach ($products as $key => $book) {
            $product = new Book();
            $product->setTitle($book['title']);
            $product->setPrice($book['price']);
            $product->setCategory($book['category']);
            $product->setDescription($book['description']);
            $product->setStatus(1);
            $product->setCount(1);
            $manager->persist($product);
        }

        $manager->flush();
    }
}
