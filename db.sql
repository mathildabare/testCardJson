CREATE DATABASE `dbtest`;
USE `dbtest`;

CREATE TABLE users (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(255),
    `mail` varchar(255),
    `password` varchar(255),
    `biography` varchar(255),

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

INSERT INTO users (username, mail, password, biography)
VALUES
     ('math', 'math@gmal.com', '1234', '...'),
     ('axel', 'axel@gmal.com', '1234','...'),
     ('nakad', 'nakad@gmal.com', '1234','...'),
     ('stiles', 'sourwolf@gmal.com', 'roscoe','...'),
     ('Silwana', 'wow335@gmal.com', 'wow','...')


;

INSERT INTO messages (name, mail, status,content )
VALUES
     ('math', 'math@gmal.com', 'exhibitor', '...' ),
     ('silwana', 'wow335@gmal.com', 'visitor', '...');


INSERT INTO articles (title, genre_1, genre_2, synopsis, author_id)
VALUES
    ('One Punch Man', 'Shounen', 'Super-Heroes', '...', '3'),
    ('Soul Eater', 'Fantasy', 'Supernatural', '...', '1'),
    ('Demon Slayer', 'Shounen', 'Fantasy', '...', '2')
;

INSERT INTO comments (author_id, article_id, content)
VALUES
    (1, '2', 'Mon premier com'),
    (1, '1', 'Mon SECOND com'),
    (1, '2', 'Mon TROISIEME com'),
    (3, '4', 'oups');
;

