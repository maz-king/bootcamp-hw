CREATE TABLE departments (
    dept_no VARCHAR(4)   NOT NULL,
    dept_name varchar(60)   NOT NULL,
    PRIMARY KEY (dept_no)
);

CREATE TABLE dept_emp (
    emp_no integer   NOT NULL,
    dept_no varchar(4)   NOT NULL,
    from_date date   NOT NULL,
    to_date date   NOT NULL,
    id SERIAL,
    PRIMARY KEY (id)
);

CREATE TABLE dept_manager (
    id SERIAL,
    dept_no varchar(4)   NOT NULL,
    emp_no integer   NOT NULL,
    from_date date   NOT NULL,
    to_date date   NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id SERIAL,
    emp_no integer   NOT NULL,
    birth_date date   NOT NULL,
    first_name varchar(100)   NOT NULL,
    last_name varchar(100)   NOT NULL,
    gender varchar   NOT NULL,
    hire_date date   NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE salaries (
    id SERIAL,
    emp_no integer   NOT NULL,
    salary integer   NOT NULL,
    from_date date   NOT NULL,
    to_date date   NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE titles (
    id SERIAL,
    emp_no integer   NOT NULL,
    title varchar(100)   NOT NULL,
    from_date date   NOT NULL,
    to_date date   NOT NULL,
    PRIMARY KEY (id)
);

