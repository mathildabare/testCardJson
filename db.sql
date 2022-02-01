CREATE DATABASE `dbtest`;
USE `dbtest`;

CREATE TABLE users (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(255),
    `mail` varchar(255),
    `password` varchar(255),
    PRIMARY KEY (`id`)
);

CREATE TABLE articles (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(255) not null,
    `author_id` INT NOT NULL,
    `genre_1` varchar(255),
    `genre_2` varchar(255),
    `synopsis` varchar(255),
    PRIMARY KEY (id)
);

create table comments (
    `id` int NOT NULL AUTO_INCREMENT,
    `author_id` INT NOT NULL,
    `article_id` INT NOT NULL,
    `content` varchar(255),
    PRIMARY KEY (`id`)
);


CREATE TABLE messages (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255),
    `mail` varchar(255),
    `status` varchar(255),
    `content` varchar(255),
    PRIMARY KEY (`id`)
);

INSERT INTO message (name, mail, status,content )
VALUES
     ('math', 'math@gmal.com', 'visitor', '...' );

INSERT INTO users (username, mail, password)
VALUES
     ('math', 'math@gmal.com', '1234'),
     ('leo', 'leo@gmal.com', '1234'),
     ('nakad', 'nakad@gmal.com', '1234')
;

INSERT INTO articles (title, genre_1, genre_2, synopsis, author_id)
VALUES
    ('title 1', 'genre 1', 'genre 2', 'Mon super synopsuissfref', '1'),
    ('One Punch Man', 'Shounen', 'Super-Heroes', '...', '3'),
    ('title 3', 'genre 1', 'genre 2', 'Mon super 3 synopsuissfref', '2'),
    ('Soul Eater', 'Fantasy', 'Supernatural', '...', '1')
;

INSERT INTO comments (author_id, article_id, content)
VALUES
    (1, '2', 'Mon premie com'),
    (1, '1', 'Mon SEOND com'),
    (1, '2', 'Mon TROISIE com'),
    (3, '4', 'oups');
;

