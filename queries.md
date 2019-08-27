# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT ProductName, CategoryName 
FROM Products AS P
JOIN Categories AS C ON P.CategoryID = C.CategoryID;
### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT OrderID, ShipperName 
FROM Orders AS O
JOIN Shippers AS S ON O.ShipperID = S.ShipperID
WHERE OrderDate < '1997-01-01';
### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity 
FROM Products AS P
JOIN OrderDetails AS O ON P.ProductID = O.ProductID
WHERE OrderID = '10251';
### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT OrderID, CustomerName, LastName
FROM Orders AS O
JOIN Customers AS C ON O.CustomerID = C.CustomerID
JOIN Employees AS E ON O.EmployeeID = E.EmployeeID;
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT CategoryName, COUNT(ProductID) AS Count FROM Categories AS C
JOIN Products AS P ON C.CategoryID = P.CategoryID
GROUP BY CategoryName;
### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
SELECT OrderID, SUM(Quantity) AS ItemCount FROM OrderDetails
GROUP BY OrderID;