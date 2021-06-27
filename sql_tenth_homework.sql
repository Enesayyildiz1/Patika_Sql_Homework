--city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
Select city,country from city 
left join country on city.country_id=country.country_id
--customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimi RIGHT JOIN sorgusunu yazınız.
Select first_name,last_name,payment_id from customer 
right join payment  on customer.customer_id=payment.customer_id
order by first_name
--customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimi FULL JOIN sorgusunu yazınız.
Select first_name,last_name,payment_id from customer 
Full join payment  on customer.customer_id=payment.customer_id
order by first_name
