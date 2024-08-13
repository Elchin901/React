-- Create the database
CREATE DATABASE out_of_office;

-- Use the created database
USE out_of_office;

-- Create Employees table
CREATE TABLE Employees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FullName VARCHAR(255) NOT NULL,
    Subdivision VARCHAR(255) NOT NULL,
    Position VARCHAR(255) NOT NULL,
    Status ENUM('Active', 'Inactive') NOT NULL,
    PeoplePartner INT NOT NULL,
    OutOfOfficeBalance INT NOT NULL,
    Photo VARCHAR(255)
);

-- Create LeaveRequests table
CREATE TABLE LeaveRequests (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT,
    AbsenceReason VARCHAR(255) NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    Comment TEXT,
    Status ENUM('New', 'Submitted', 'Approved', 'Rejected', 'Canceled') DEFAULT 'New',
    FOREIGN KEY (EmployeeID) REFERENCES Employees(ID)
);

-- Create ApprovalRequests table
CREATE TABLE ApprovalRequests (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ApproverID INT,
    LeaveRequestID INT,
    Status ENUM('New', 'Approved', 'Rejected') DEFAULT 'New',
    Comment TEXT,
    FOREIGN KEY (ApproverID) REFERENCES Employees(ID),
    FOREIGN KEY (LeaveRequestID) REFERENCES LeaveRequests(ID)
);

-- Create Projects table
CREATE TABLE Projects (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ProjectType VARCHAR(255) NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE,
    ProjectManagerID INT,
    Comment TEXT,
    Status ENUM('Active', 'Inactive') NOT NULL,
    FOREIGN KEY (ProjectManagerID) REFERENCES Employees(ID)
);
