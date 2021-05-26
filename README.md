# bookshop
Online book shop
# this requires Symfony 5.x for all Symfony packages
export SYMFONY_REQUIRE=5.*

# install Symfony Flex in the CI environment
composer global require --no-progress --no-scripts --no-plugins symfony/flex

# install the dependencies (using --prefer-dist and --no-progress is
# recommended to have a better output and faster download time)
composer update --prefer-dist --no-progress