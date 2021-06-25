--film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?
SELECT  Avg(rental_rate) FROM film ;
--film tablosunda bulunan filmlerden kaçtanesi 'C' karekteri ile başlar?
SELECT  count(*) FROM film where title like 'C%';
--film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?
SELECT  max(length) FROM film where  rental_rate=0.99;
film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?
SELECT  count(replacement_cost) FROM film where  length>150;
