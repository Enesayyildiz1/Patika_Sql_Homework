--actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
(Select first_name from actor)
Union all
(Select first_name from customer),
--actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
(Select first_name from actor)
Intersect
(Select first_name from customer)
--actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
(Select first_name from actor)
EXCEPT
(Select first_name from customer)
