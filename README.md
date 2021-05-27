Online Book Shop
============

Symfony5 

## Install

### 1. Clone the project with Git:

```
git clone https://github.com/reshanmadushanka/bookshop.git
```

### 2. Install composer dependencies

```
composer install
```
### 3. Install react dependencies

```
yarn install
```
### 4. Install assets and dump js routing

```
php bin/console assets:install --symlink
```

```
php bin/console fos:js-routing:dump
```

### 5. Set-up Database

Create database if it doesn't exist.
```
php bin/console doctrine:database:create
```
Create tables based on the Entity classes.
```
php bin/console doctrine:schema:update --force
```
### 6. Run Project

run symfony project.
```
symfony serve
```
Create tables based on the Entity classes.
```
yarn run encore dev --watch
```
## License

This bundle is under the MIT license. See the complete license in the bundle:

    src/AppBundle/Resources/meta/LICENSE
