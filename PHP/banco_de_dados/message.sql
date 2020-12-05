use the_pink_store;

create table if not exists comentarios(
id_comentarios integer auto_increment,
nome varchar (100),
email varchar (100),
mensagem varchar (200),
primary key (id_comentarios)
);