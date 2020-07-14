select p.title, p.content, u.username, p.img
from posts p
join users u 
on p.author_id = u.user_id;
