--city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
Select city,country from city 
inner join country on city.country_id=country.country_id
--customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz
Select first_name,last_name,payment_id from customer 
inner join payment on customer.customer_id=payment.customer_id
--customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
Select first_name,last_name,rental_id from customer 
inner join rental on rental.customer_id=customer.customer_id
