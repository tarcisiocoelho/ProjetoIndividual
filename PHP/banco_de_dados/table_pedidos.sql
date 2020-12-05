create database pedidos;
use pedidos;

create table pedido(
id_pedido int primary key auto_increment,
nome varchar (50),
cidade varchar (100),
produto varchar (50),
quantidade int
) default charset utf8mb4;

insert into pedido values 
(null, 'Tarcisio Araujo Coelho', 'Sao Paulo', 'Bicicleta', '5'),
(null, 'Paula Souza Lemos', 'Sao Paulo', 'Jogo de Tabuleiro', '3'),
(null, 'Katia Fonseca', 'Rio de Janeiro', 'Guarda Chuva', '10'),
(null, 'Pedro Casto', 'Niteroi', 'Video Game', '1'),
(null, 'Debora Neves', 'Taboao da Serra', 'Computador', '3');

alter table pedido
engine = InnoDB;

create table envio(
id_envio int primary key auto_increment,
empresa varchar (100),
prazo varchar (50)
) default charset utf8mb4;

insert into envio values 
(null, 'Kazimbe', '2 dias'),
(null, 'Colem', '5 dias'),
(null, 'Guapy', '7 dias');

alter table envio
engine = InnoDB;

create table matricula_pedido(
id_envio int,
id_pedido int
) default charset utf8mb4;

alter table matricula_pedido
engine = InnoDB;

ALTER TABLE `matricula_pedido` ADD CONSTRAINT `fk_envio` FOREIGN KEY ( `id_envio` ) REFERENCES `envio` ( `id_envio` ) ;
ALTER TABLE `matricula_pedido` ADD CONSTRAINT `fk_pedido` FOREIGN KEY ( `id_pedido` ) REFERENCES `pedido` ( `id_pedido` ) ;

insert into matricula_pedido values 
('1', '1'),
('3', '2'),
('2', '3'),
('1', '4'),
('3', '5');
