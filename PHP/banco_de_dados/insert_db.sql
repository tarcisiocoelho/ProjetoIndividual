create database the_pink_store;
use the_pink_store;
select * from produtos;


create table if not exists produtos(
id_produtos integer auto_increment not null,
categoria varchar (200),
descricao varchar (400),
preco varchar (50),
preco_final varchar (50),
imagem varchar (200),
primary key (id_produtos)
);

insert into produtos (categoria, descricao, preco, preco_final, imagem) values 
('Microondas', 'Micro Ondas, 20L, Branco Espelhado, 110v', '445,34', '379,99', 'microondas1.png'),
('Microondas', 'Micro Ondas, 20L, Branco, 110v, Electrolux', '530,00', '439,99', 'microondas2.png'),
('Microondas', 'Micro Ondas 21 Litros Pmo21t Philco Preto', '499,50', '420,99', 'microondas3.png'),
('Impressora', 'Multifuncional EPSON Tanque de Tinta L396', '1.299,00', '1.169,10', 'impressora1.png'),
('Impressora', 'Multifuncional Epson Wireless C11cg23302', '1.699,99', '1.529,99', 'impressora2.png'),
('Impressora', 'Impressora Multifuncional HP', '2.299,00', '1.969,99', 'impressora3.png'),
('Impressora', 'Multifuncional monocromatica', '1.259,00', '1.000,99', 'impressora4.png'),
('Fogao', 'Fogao 5 Bocas Mesa de Inox Sirius Plus', '859,00', '610,99', 'fogao.png'),
('Fogao', 'Fogao 5 Bocas Consul Automatico', '1.499,00', '1.313,10', 'fogao2.png'),
('Televisao', 'Smart TV LED 32 Samsung 32T4300A', '1.399,00', '1.099,10', 'televisao1.png'),
('Televisao', 'Smart TV Crystal UHD 4K LED 50 Samsung', '2.699,00', '2.199,00', 'televisao2.png'),
('Televisao', 'Smart TV Crystal UHD 4K LED 43 Samsung', '2.199,00', '1.900,50', 'televisao3.png');
