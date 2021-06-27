--film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
select length from film where length>(select avg(length) from film)
--film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
select count(*) from film where rental_rate=(select max(rental_rate) from film)
--film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
(select * from film order by rental_rate)
union
(select * from film order by replacement_cost)
--payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.
select customer_id,count(*) from payment group by customer_id
order by count(*) desc
