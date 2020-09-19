CREATE TABLE app_authorization(
    app_authorization_id INT AUTO_INCREMENT NOT NULL,
    module VARCHAR(64) NOT NULL,
    action VARCHAR(64) DEFAULT '',
    description VARCHAR(64) DEFAULT '',
    state TINYINT DEFAULT 1,
    CONSTRAINT pk_app_authorization PRIMARY KEY (app_authorization_id)
) ENGINE=InnoDB;

CREATE TABLE user_role(
    user_role_id INT AUTO_INCREMENT NOT NULL,
    description varchar(64) NOT NULL,

    updated_at DATETIME,
    created_at DATETIME,
    created_user_id INT,
    updated_user_id INT,
    state TINYINT DEFAULT 1,
    CONSTRAINT pk_user_role PRIMARY KEY (user_role_id)
) ENGINE=InnoDB;

CREATE TABLE user_role_authorization(
    user_role_id INT NOT NULL,
    app_authorization_id INT NOT NULL,
    CONSTRAINT fk_user_role_authorization_user_role FOREIGN KEY (user_role_id) REFERENCES user_role (user_role_id)
    ON UPDATE NO ACTION ON DELETE NO ACTION,
    CONSTRAINT fk_user_role_authorization_app_authorization FOREIGN KEY (app_authorization_id) REFERENCES app_authorization (app_authorization_id)
    ON UPDATE NO ACTION ON DELETE NO ACTION
) ENGINE=InnoDB;

CREATE TABLE users(
    user_id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    avatar VARCHAR(64) DEFAULT '',
    email  VARCHAR(64) DEFAULT '' UNIQUE,
    user_role_id INT NOT NULL,

    updated_at DATETIME,
    created_at DATETIME,
    created_user_id INT,
    updated_user_id INT,
    state TINYINT DEFAULT 1,
    CONSTRAINT pk_user PRIMARY KEY (user_id),
    CONSTRAINT fk_user_user_role FOREIGN KEY (user_role_id) REFERENCES user_role (user_role_id)
        ON UPDATE NO ACTION ON DELETE NO ACTION
) ENGINE=InnoDB;

CREATE TABLE user_forgot(
    user_forgot_id INT AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    secret_key VARCHAR(128) NOT NULL,
    used TINYINT DEFAULT 0,

    updated_at DATETIME,
    created_at DATETIME,
    created_user_id INT,
    updated_user_id INT,
    CONSTRAINT pk_user_forgot PRIMARY KEY (user_forgot_id),
    CONSTRAINT fk_user_forgot_user FOREIGN KEY (user_id) REFERENCES users (user_id)
        ON UPDATE NO ACTION ON DELETE NO ACTION
) ENGINE=InnoDB;

INSERT INTO app_authorization (module,action,description,state)
        VALUES ('home','home','dashboard',true),

               ('rol','listar','listar roles',true),
               ('rol','crear','crear nuevos rol',true),
               ('rol','eliminar','Eliminar un rol',true),
               ('rol','modificar','Acualizar los roles',true),

               ('usuario','listar','listar usuarios',true),
               ('usuario','crear','crear nuevo usuarios',true),
               ('usuario','eliminar','Eliminar un usuario',true),
               ('usuario','modificar','Acualizar los datos del usuario exepto la contraseña',true),
               ('usuario','modificarContraseña','Solo se permite actualizar la contraseña',true);

INSERT INTO user_role (created_at, created_user_id, description, state)
            VALUES ('2020-02-17 00:00:00', '0', 'Administrador', 1),
                    ('2020-02-17 00:00:00', '0', 'Usuario', 1);

INSERT INTO users(user_name, password, full_name, avatar, email, user_role_id)
        VALUES ('admin1',sha1('admin1'),'admin1','','admin@admin.com',1);

INSERT INTO user_role_authorization (user_role_id,app_authorization_id)
    VALUES (1, 1),
           (1, 2),
           (1, 3),
           (1, 4),
           (1, 5),
           (1, 6),
           (1, 7),
           (1, 8),
           (1, 9),
           (1, 10);

INSERT INTO user_role_authorization (user_role_id,app_authorization_id)
    VALUES (2, 1),
           (2, 6),
           (2, 7),
           (2, 8),
           (2, 9),
           (2, 10);