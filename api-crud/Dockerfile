FROM php:7.4-apache

RUN apt-get update && apt-get install -y \
&& docker-php-ext-install mysqli pdo pdo_mysql
RUN apt-get install nano
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer
RUN a2enmod rewrite

COPY . ../
COPY .env ../
COPY ./public/ .
RUN chmod -R 775 /var/www/storage
RUN chown -R www-data:www-data /var/www
RUN cd .. && composer install && php artisan migrate
