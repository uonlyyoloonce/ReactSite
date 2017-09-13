select count(*) from book

select count(*) from book where 
isbn like 'b%' or isbn like 'B%'

delete from book 
where isbn like 'b%' or isbn like 'B%'



update amz_ca_latest 
set min_prime_price=com.maxprice
from (select book_id,min(prime_price) maxprice
      from amz_ca 
      group by book_id
      ) com
      where com.book_id=amz_ca_latest.book_id
      
update amz_com_latest 
set minrank=com.maxprice
from (select book_id,min(rank)maxprice
      from amz_com 
      group by book_id
      ) com
      where com.book_id=amz_com_latest.book_id
      
select b.isbn ,ca.min_prime_price from amz_com_latest com
left join amz_ca_latest ca 
on ca.book_id=com.book_id
left join book b
on b.book_id=com.book_id

where com.minrank<500000 
       and (com.min_prime_price+com.max_prime_price)/2-ca.min_prime_price>8000
     -- and (com.min_prime_price+com.max_prime_price)/2-ca.min_prime_price<15000
      and ca.prime_price>0 and ca.min_prime_price > 0
      
      
select ca.* from amz_ca ca
left join book b
on ca.book_id=b.book_id
where b.isbn='0387848711'
order by update_date 

select com.* from amz_com com
left join book b
on com.book_id=b.book_id
where b.isbn='3319219596'
order by update_date 


select ind.isbn,amz.rank,ind.price from indigo ind
left join amz_com_latest amz
on amz.book_id=ind.book_id
where amz.prime_price-ind.price > 10000
      and ind.availability=true