DECLARE
v_bookid INTEGER;
v_hasIndigo INTEGER;

BEGIN
select book_id into v_bookid from book where isbn = a_isbn;
if v_bookid is null then
    raise notice 'bookid is null';
    insert into book(isbn,update_date) values(a_isbn,to_number(to_char(current_timestamp,'YYYYMMDD'),'9999999999'));
    select book_id into v_bookid from book where isbn = a_isbn;
end if;
raise notice 'bookid is %', v_bookid;
select book_id
into v_hasIndigo 
from indigo where book_id = v_bookid;
if v_hasIndigo is null then
    
        insert into indigo(book_id, price_date,isbn,price,availability,publisher,instockquantity,cateid)
        values(v_bookid, to_number(to_char(current_timestamp,'YYYYMMDD'),'9999999999'),a_isbn,a_price,a_availability,a_instockquantity,a_cateid);
 
else
    update indigo set
            price_date = to_number(to_char(current_timestamp,'YYYYMMDD'),'9999999999'),
           price = a_price,
           availability = a_availability,
          
             instockquantity =a_instockquantity,
            used_offers =a_totalUsed,
           cateid=a_primeprice-v_cateid,
           where book_id = v_bookid;
end if;


END;




