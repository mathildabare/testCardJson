-- Création DB
CREATE DATABASE `dbtest`;
USE `dbtest`;
--************* TABLES *******************--
-- Création Table USERS
CREATE TABLE users (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(255),
    `mail` varchar(255),
    `password` varchar(255),
    `biography` varchar(255),
    `avatar` varchar(255) DEFAULT NULL,
    `phone` TINYINT(12),
    `isAdmin` TINYINT(1) NOT NULL DEFAULT 0,
    `isBan` TINYINT(1) NOT NULL DEFAULT 0,
    
    PRIMARY KEY (`id`)
);


--  Création Table ARTICLES
CREATE TABLE articles (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(255) not null,
    `author_id` INT NOT NULL,
    `genre_1` varchar(255),
    `genre_2` varchar(255),
    `synopsis` varchar(255),
    `img` varchar(255),
    PRIMARY KEY (id)
);


-- Création Table COMMENTS
CREATE TABLE comments (
    `id` int NOT NULL AUTO_INCREMENT,
    `author_id` INT NOT NULL,
    `article_id` INT NOT NULL,
    `content` varchar(255),
    PRIMARY KEY (`id`)
);


-- Création Table MESSAGES
CREATE TABLE messages (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255),
    `mail` varchar(255),
    `status` varchar(255),
    `content` varchar(255),
    PRIMARY KEY (`id`)
);


--***************** INSERT INTO *******************--


-- Contenu USERS
INSERT INTO users (username, mail, password, biography, avatar, phone, isAdmin)
VALUES ('math', 'math@gmal.com', '1234', '...', NULL, NULL, 1);
    



-- Contenu ARTICLES
INSERT INTO articles (title,genre_1,genre_2,synopsis,author_id,img)
VALUES ('One Punch Man','Shounen','Super-Heroes','...','3',NULL) 
 ('Soul Eater','Fantasy','Supernatural','...','1',NULL ),
    ('Demon Slayer','Shounen','Fantasy','...','2',NULL);


-- Contenu COMMENTS
INSERT INTO comments (author_id, article_id, content)
VALUES (1, '2', 'Mon premier com'),
    (1, '1', 'Mon SECOND com'),
    (1, '2', 'Mon TROISIEME com'),
    (3, '4', 'oups');


-- Contenu MESSAGES
INSERT INTO messages (name, mail, status, content)
VALUES ('math', 'math@gmal.com', 'exhibitor', '...'),
    ('silwana', 'wow335@gmal.com', 'visitor', '...');





ALTER TABLE articles ALTER author_id
SET DEFAULT 1;