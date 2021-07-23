### Exercício 1
a. Deleta a coluna
b. muda o tipo da coluna
c. muda especificações
d.
SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2
a. UPDATE Actor
SET birth_date = "1950-05-05"
WHERE id = "003"
b. UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
c. UPDATE Actor
SET name = "Novo fulano",
salary = 2000000,
birth_date = "1950-05-05",
gender = "other"
WHERE id = "005";
d. Não gera um erro, mas não atualiza nada, pois não existe

### Exercício 3
a. DELETE FROM Actor 
WHERE name = "Fernanda Montenegro"
b. DELETE FROM Actor 
WHERE gender = "male" AND
salary > 1000000;

### Exercício 3
a. SELECT MAX(salary) FROM Actor
b. SELECT MIN(salary) FROM Actor WHERE gender = "female"
c. SELECT COUNT(*) FROM Actor WHERE gender = "female"
d. SELECT SUM(salary) FROM Actor

