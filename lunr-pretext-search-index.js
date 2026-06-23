var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec11-SystemLinearEquations",
  "level": "1",
  "url": "sec11-SystemLinearEquations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations   Back in previous algebra classes, you probably learned how to solve system of linear equations algebraically using methods like substitution and elimination. While these methods are effective for small systems, they quickly become unwieldy as there are more variables and\/or more equations.  As our introductory lesson to linear algebra, we will learn a more efficient method for solving systems of linear equations using elementary row operations on augmented matrices .    After this section, students will be able to:     construct an augmented matrix from a system of linear equations (and vice versa);    use elementary row operations on an augmented matrix to solve a system of linear equations;    distinguish between systems with exactly one solution , infinitely many solutions , and no solution .    express the solution set of a system of linear equations with infinitely many solutions in parametric form .        Recall we learned solving a (system of) linear equation(s) before. Let's try solving some of them.    The equation is a linear equation. What is the solution(s) to this equation?   It is a system of linear equations. It's just a boring one because there is only one variable and only one equation.  It has one solution,      The equation is also a linear equation. What is the solution(s) to this equation?   This system has only one equation but it has two variables. It has infinitely many solutions!  Every point on the line is a solution. Some specific solutions are and .     The two linear equations and form a system of linear equations. What is the solution(s) to this system of equations?   This system has two equations but only one variable.  It doesn't have any solutions! It isn't possible for to be both and .      Solving Systems of Linear Equations  The type of systems of linear equations you may encounter a lot before may look like this: You probably learned the two most common ways to solve these equations.  The first method is called substitution . In this method, you will   solve for one variable in terms of the other (using either equation);    substitute the resulting expression in the other equation;    substitute the resulting value into the expression from Step 1 (or into either equation) to get the second value.   Let's use this method to solve this system of linear equations!  If we solve the first equation for , we get Then we can substitute this into the second equation to get Then we can simplify and solve for and get a specific number: Then we can substitute this value of into to find the value of . So the solution to this system of linear equations is .   NOTE: This method can be generalized and used for larger linear systems (more equations and\/or more variables). But the next method is much better for larger systems.  You may have called the next method something like the \"subtraction method\" or the \"elimination method\". In this method you perform \" elementary operations \" on the equations until you get a system that is super easy to solve.  The elementary operations you can choose from are:   swap two equations;    multiply an equation by a constant (on both sides);    add a multiple of one equation to the other equation.     Let's use the elementary operations to solve the same system of linear equations as before:   First, we will add times the first equation to the second equation (replacing the second equation) to get Next, we will multiply both sides of the second equation by to get Then we will add times the second equation to the first equation (replacing the first equation) to get Finally, we will multiply the first equation by to get Notice that we have now turned our system of equations into a new system of equations that is absurdly easy to solve. It literally just says the answer is .  But why does the method of elementary operations work? This method works because none of the three elementary operations changes the solution set of the system of equations . At each step, the set of solutions of the system before you perform the elementary operation is exactly the same as the solution set after you perform the elementary operation.   But Richard... Why don't the elementary operations change the solution set of a system of equations?  Instead of giving a formal proof for all cases (which you can find in the book if you want), Richard will explain why it works in the case of a system of two equations with two variables:   It is obvious that swapping equations clearly can't change the solution set. It makes no difference what order the equations are listed in.    It is also pretty clear that multiplying both sides of an equation by a non-zero number will not change the solution set.  First, notice that if is a solution before , then it is a solution after . That is, if , then it is also true that for any non-zero constant . This is because when two numbers are equal, you get the same answer when you multiply each of them by the same number.  Second, notice that if is a solution after , then it is a solution before . Since the number is not zero, exists and is not zero. So if , then it is also true that (you can just multiply both sides by !).    The least obvious one is the elementary operation of adding a multiple of one equation to another equation (and replacing the equation). We can think of this elementary operation as doing two steps:   multiply one equation by a non-zero constant, and    add one equation to another equation (and replace that equation with the sum).   The first step is just the operation of multiplying an equation by a non-zero constant, which we already know does not change the solution set. So we just need to demonstrate that adding one equation to another (and replacing the second equation with the sum) does not change the solution set.  First, we need to show that anything that was a solution before is still a solution after . Consider the system of linear equations Suppose that and (in other words suppose is a solution). We want to show that is still a solution to the system Since we already know that is a solution to the first equation, we just need to show it is a solution to the second equation.  Since the number is equal to the number . If we add to both of them, we get the same thing. So we get And since we know that , we can substitute to get Do some simplifying and factoring on the left side and we get This proves is indeed a solution to the second equation!  Second, we want to show that if is a solution after then it is a solution before . But really we already have! That is because we can get from the after system to the before system by multiplying the first equation by and adding it to the second equation. So going backwards just involves doing the exact same thing as going forward (just after multiplying by a non-zero constant which we know always works!).      But Richard... Why bother showing the solution sets are the same before and after, and vice versa?  That is because this establishes that the elementary operations are reversible ! Then we can call the two systems \" equivalent \" in the sense that they have the same solution set.  To give you an example of non-reversible operations, consider the operation of \"squaring both sides of an equation\".  Let's say we have an equation . Obviously, there is only one solution to this equation, which is . If we apply this operation, then we get the equation . Clearly, is still a solution to this new equation. Hence, in this operation, the solution before is still a solution after .  Yet, the new equation has another solution, which is . This isn't a solution to the original equation, and hence, the solution after may not be a solution before .  This shows that this operation is not reversible and hence the two equations are not equivalent (in the sense that they don't have the same solution set).     Use the elementary operations to solve the following system of linear equations:    There are a lot of ways to do this. This is one:  Step 1: Multiply the second equation by to get   Step 2: Add times the first equation to the second equation (replacing the second equation) to get   Step 3: Multiply the second equation by to get   Step 4: Add times the second equation to the first equation (replacing the first equation) to get   Step 5: Multiply the first equation by to get   And that's our solution, !      Augmented Matrices and Elementary Operations  Basically, a matrix is just an array of numbers inside of a set of brackets. For example, is a matrix since there are rows and columns.  We will learn a lot more about matrices this term! But first we will learn about a kind of \"fake\" matrix called an augmented matrix . An augmented matrix is compressed version of a matrix equation which we will learn about soon.  For any system of equations we can make the associated augmented matrix by basically writing down the equation inside of a big set of brackets and erasing all of the variables and addition\/subtraction signs and replacing all of the equal signs with a big vertical line (some people used a dashed line).  For example, we can convert the following system of linear equations into its associated augmented matrix as The part of the augmented matrix to the left of the vertical line(s) is called the coefficient matrix (the coefficient part of the system) and the part to the right of the vertical line(s) is called the constant matrix (the constant part of the system).  When you write a system of linear equations as an augmented matrix, you can do the exact same operations to your equations except now you do them to the rows of the matrix (each row is just a compressed version of an equation!). So the three elementary row operations are:   swap two rows;    multiply a row by a non-zero constant;    add a multiple of a row to another row (replacing that row).   You can solve a system of equations by (1) writing it as an augmented matrix, (2) performing elementary row operations until it is in a \"nice\" form, and then (3) writing this nice version as a system of linear equations (and reading off the answer).  Let's solve the previous system of linear equations using the augmented matrix. Our augmented matrix is We can add times Row 1 to Row 2 (replacing Row 2) to get Then we can multiply Row 2 by to get And then add times Row 2 to Row 1 (replacing Row 1) to get Finally, we can multiply Row 1 by to get Now if we convert this back to a system of linear equations, we get And it's already solved!   Solve the following system of linear equations (again). This time make the augmented matrix and use elementary row operations to solve it.   The augmented matrix for this system is There are a lot of ways to solve the system. Here is one:  Step 1: Multiply Row 2 by to get   Step 2: Add times Row 1 to Row 2 (replacing Row 2) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 1 (replacing Row 1) to get   Step 5: Multiply Row 1 by to get   Then we can write this as a system of equations again and get And that's our solution, !      How many solutions can a linear system have?  The system of linear equations in the previous example has exactly one solution (which we found in three different ways!) but not all linear systems have exactly one solution. Some do not have any solutions and some have infinitely many solutions.  Let's solve the following system of linear equations using the augmented matrix and elementary row operations: The augmented matrix is Let's first add times Row 1 to Row 2 (replacing Row 2). We get Now we can write this as a system of linear equations, and we get But... is definitely NOT equal to . So this system has no solution!  Notice that both of the equations in our original system are lines (that's where the \"linear\" comes from!). Richard graphed these two lines and they look like this:    The line (in blue) and (in red)   These lines are parallel and they don't intersect!  When you have three variables then each equation is a plane, so you get no solutions when one of the planes is parallel to (but not equal to) the other. And the same kind of thing happens in higher dimensions except that it would blow your mind if you tried to see it!   What happens in your augmented matrix when you have no solution? You zero out a row of coefficients using elementary operations BUT the constant in that row is NOT zero.  Next, let's solve this system of linear equations using the augmented matrix and elementary row operations: The augmented matrix is This time, we will add times Row 1 to Row 2 (replacing Row 2), and we get Now we can write this as a system of linear equations. We get This time, the second equation is true. IS definitely equal to . Notice that our second equation is true no matter what and are! That means that any that satisfies the first equation will satisfy both equations. So the solution is every point on the line .  If you were to graph the two original equations, this time you would find that they were actually the exact same line!  When you have infinitely many solutions, you will want to write the solution set in parametric form . The way to do this (for a two-variable system) is to solve for one variable in terms of the other and then write a general form for any solution . For this example, we can solve for in terms of and get So for any value of , we get the solution . In this case, the is called the parameter .  We can pick any value of  we want and plug it into that formula to get a solution to the system. For example, if Richard picks , then he will get the solution .   Notation Warning!  Some textbooks like to introduce a new letter to use for the parameter. For example, in this case they would probably use and write the solutions as This is unnecessary but Richard will do it from time to time just to make sure you understand where these mysterious parameters come from.   Sometimes we may need more than one parameter to describe all of the solutions to a system of equations. But that is a story for another day (that day will be Thursday).   What happens in your augmented matrix when you have infinitely many solutions? You zero out a row of coefficients using elementary operations AND the constant in that row is also zero.    Existence and Uniqueness Questions  Recall that a system of linear equations can have either no solution, exactly one solution, or infinitely many solutions. We ask two questions to determine which of these three cases we are in:   Is the system consistent ? That is, does a solution exist ?    If a solution exists, is it the only one? That is, is the solution unique ?     Right now, we can answer these questions by actually solving the system of equations and seeing what happens. In , we will learn how to answer these questions by using only the augmented matrix and elementary row operations without having to write the system of equations out.   "
},
{
  "id": "sec11-SystemLinearEquations-2-2",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#sec11-SystemLinearEquations-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operations augmented matrices "
},
{
  "id": "sec11-SystemLinearEquations-2-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#sec11-SystemLinearEquations-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     construct an augmented matrix from a system of linear equations (and vice versa);    use elementary row operations on an augmented matrix to solve a system of linear equations;    distinguish between systems with exactly one solution , infinitely many solutions , and no solution .    express the solution set of a system of linear equations with infinitely many solutions in parametric form .    "
},
{
  "id": "sec11-SystemLinearEquations-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#sec11-SystemLinearEquations-3",
  "type": "Investigation",
  "number": "1.1.1",
  "title": "",
  "body": "  Recall we learned solving a (system of) linear equation(s) before. Let's try solving some of them.    The equation is a linear equation. What is the solution(s) to this equation?   It is a system of linear equations. It's just a boring one because there is only one variable and only one equation.  It has one solution,      The equation is also a linear equation. What is the solution(s) to this equation?   This system has only one equation but it has two variables. It has infinitely many solutions!  Every point on the line is a solution. Some specific solutions are and .     The two linear equations and form a system of linear equations. What is the solution(s) to this system of equations?   This system has two equations but only one variable.  It doesn't have any solutions! It isn't possible for to be both and .    "
},
{
  "id": "subsec-SolvingSystemsEquations-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-SolvingSystemsEquations-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "substitution "
},
{
  "id": "subsec-SolvingSystemsEquations-11",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-SolvingSystemsEquations-11",
  "type": "Note",
  "number": "1.1.1",
  "title": "But Richard... Why don’t the elementary operations change the solution set of a system of equations?",
  "body": " But Richard... Why don't the elementary operations change the solution set of a system of equations?  Instead of giving a formal proof for all cases (which you can find in the book if you want), Richard will explain why it works in the case of a system of two equations with two variables:   It is obvious that swapping equations clearly can't change the solution set. It makes no difference what order the equations are listed in.    It is also pretty clear that multiplying both sides of an equation by a non-zero number will not change the solution set.  First, notice that if is a solution before , then it is a solution after . That is, if , then it is also true that for any non-zero constant . This is because when two numbers are equal, you get the same answer when you multiply each of them by the same number.  Second, notice that if is a solution after , then it is a solution before . Since the number is not zero, exists and is not zero. So if , then it is also true that (you can just multiply both sides by !).    The least obvious one is the elementary operation of adding a multiple of one equation to another equation (and replacing the equation). We can think of this elementary operation as doing two steps:   multiply one equation by a non-zero constant, and    add one equation to another equation (and replace that equation with the sum).   The first step is just the operation of multiplying an equation by a non-zero constant, which we already know does not change the solution set. So we just need to demonstrate that adding one equation to another (and replacing the second equation with the sum) does not change the solution set.  First, we need to show that anything that was a solution before is still a solution after . Consider the system of linear equations Suppose that and (in other words suppose is a solution). We want to show that is still a solution to the system Since we already know that is a solution to the first equation, we just need to show it is a solution to the second equation.  Since the number is equal to the number . If we add to both of them, we get the same thing. So we get And since we know that , we can substitute to get Do some simplifying and factoring on the left side and we get This proves is indeed a solution to the second equation!  Second, we want to show that if is a solution after then it is a solution before . But really we already have! That is because we can get from the after system to the before system by multiplying the first equation by and adding it to the second equation. So going backwards just involves doing the exact same thing as going forward (just after multiplying by a non-zero constant which we know always works!).      But Richard... Why bother showing the solution sets are the same before and after, and vice versa?  That is because this establishes that the elementary operations are reversible ! Then we can call the two systems \" equivalent \" in the sense that they have the same solution set.  To give you an example of non-reversible operations, consider the operation of \"squaring both sides of an equation\".  Let's say we have an equation . Obviously, there is only one solution to this equation, which is . If we apply this operation, then we get the equation . Clearly, is still a solution to this new equation. Hence, in this operation, the solution before is still a solution after .  Yet, the new equation has another solution, which is . This isn't a solution to the original equation, and hence, the solution after may not be a solution before .  This shows that this operation is not reversible and hence the two equations are not equivalent (in the sense that they don't have the same solution set).   "
},
{
  "id": "subsec-SolvingSystemsEquations-12",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-SolvingSystemsEquations-12",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "",
  "body": " Use the elementary operations to solve the following system of linear equations:    There are a lot of ways to do this. This is one:  Step 1: Multiply the second equation by to get   Step 2: Add times the first equation to the second equation (replacing the second equation) to get   Step 3: Multiply the second equation by to get   Step 4: Add times the second equation to the first equation (replacing the first equation) to get   Step 5: Multiply the first equation by to get   And that's our solution, !   "
},
{
  "id": "subsec-AugmentedMatrices-3",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-AugmentedMatrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "subsec-AugmentedMatrices-5",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-AugmentedMatrices-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix constant matrix "
},
{
  "id": "subsec-AugmentedMatrices-8",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-AugmentedMatrices-8",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "",
  "body": " Solve the following system of linear equations (again). This time make the augmented matrix and use elementary row operations to solve it.   The augmented matrix for this system is There are a lot of ways to solve the system. Here is one:  Step 1: Multiply Row 2 by to get   Step 2: Add times Row 1 to Row 2 (replacing Row 2) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 1 (replacing Row 1) to get   Step 5: Multiply Row 1 by to get   Then we can write this as a system of equations again and get And that's our solution, !   "
},
{
  "id": "subsec-NumberOfSolution-5",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-NumberOfSolution-5",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": "  The line (in blue) and (in red)  "
},
{
  "id": "subsec-NumberOfSolution-11",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-NumberOfSolution-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solve for one variable in terms of the other and then write a general form for any solution parameter "
},
{
  "id": "subsec-NumberOfSolution-13",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-NumberOfSolution-13",
  "type": "Note",
  "number": "1.1.6",
  "title": "Notation Warning!",
  "body": " Notation Warning!  Some textbooks like to introduce a new letter to use for the parameter. For example, in this case they would probably use and write the solutions as This is unnecessary but Richard will do it from time to time just to make sure you understand where these mysterious parameters come from.  "
},
{
  "id": "subsec-ExistenceUniqueness-SystemEquations-2",
  "level": "2",
  "url": "sec11-SystemLinearEquations.html#subsec-ExistenceUniqueness-SystemEquations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent unique "
},
{
  "id": "sec12-RowReduction",
  "level": "1",
  "url": "sec12-RowReduction.html",
  "type": "Section",
  "number": "1.2",
  "title": "Row Reduction and Echelon Forms",
  "body": " Row Reduction and Echelon Forms   While we have already explored the use of elementary operations to solve linear systems, we now turn our attention to a formal, algorithmic approach known as Gaussian Elimination . This method provides a systematic way to navigate the \"staircase\" of a matrix, ensuring that we can solve systems of any size—whether by hand or by programming a computer to do the heavy lifting for us.  In this section, we will define the \"goal\" states for our matrices: row echelon form and reduced row echelon form . We will also learn how to use these forms to quickly identify whether a system has a unique solution, infinitely many solutions, or no solution at all by identifying pivots and free variables .    After this section, students will be able to:     distinguish between a matrix in row echelon form and one in reduced row echelon form ;    apply the Gaussian Elimination Algorithm to transform an augmented matrix into (reduced) echelon form (aka row reduction);    perform back substitution to find the solution to a system whose augmented matrix is in echelon form;    identify free variables and use them to express the solution set in parametric form .    determine if a system is consistent by checking for pivots in the rightmost column of the augmented matrix.      The method we have been talking about in for solving a system of linear equations using an augmented matrix and elementary row operations is called Gaussian Elimination . We now will learn some more terminology related to Gaussian Elimination and boil it down to an algorithm.  There are LOTS of different ways that you can go about solving a system using an augmented matrix and elementary row operations. You can do lots of different steps in lots of different orders and you can convert back to a system of linear equations at lots of different points in the process.  However, it will be helpful to learn a more algorithmic approach both for consistency with hand calculations and because a consistent algorithm is one that you can program a computer to execute.  In this section, we will learn two variants of the Gaussian Elimination algorithm. Both of them include what I will call Part 1 while the second includes a Part 2.  Let's solve the following system of linear equations we worked on in using the Gaussian Elimination algorithm. Then Richard will describe the algorithm in general.  The augmented matrix is The first thing we will do is to multiply Row 1 by to get The goal of that step was to have the first non-zero thing in Row 1 be a .  Next, we will add times Row 1 to Row 2 (and replace Row 2) to get The goal of that step was to make everything below that first a zero.  Then we will multiply Row 2 by to get Notice that now the coefficient matrix looks like a litter stair step with the first thing in each row a with only below it. This matrix is in what is called row echelon form .  When you reach that point, you have completed Part 1 of the Gaussian Elimination algorithm.  Now let's keep going with Part 2!  We will now add times Row 2 to Row 1 (and replace Row 1) to get The goal of that step was to turn \"everything\" above the first in Row 2 into a zero. Now the matrix is in what is called a reduced row echelon form . The difference being that now we have zeros above our staircase of 's.   Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if:   Every row consisting of only zeros must appear at the bottom of the matrix.    The first entry in any non-zero row is a . These are called the \"leading\" 's.    Every leading has only zeros below it (a \"leading \" is a that is the first non-zero number in a row).     A matrix is in reduced row echelon form if conditions 1-3 above are met AND every leading has only zeros above it.     Some variations on the above definition  If you read other textbooks, you may find that the second condition is considered as part of the definition condition for reduced row echelon form instead of row echelon form. That is, the first non-zero entry can be anything (of course, except for zero) in row echelon form, but it must be a (the leading ) in reduced row echelon form.  Practically, it doesn't make a difference how you define it, because you can always multiply a row by the reciprocal of its first non-zero entry to get a leading out of it.    Note: These definitions apply to regular matrices and to augmented matrices.  For example, the following matrices are all in row echelon form:   The following matrices (and the last one above) are all in reduced row echelon form:    Note on second example above  Technically, the full augmented matrix in the second example above is not in reduced row echelon form (but the coefficient matrix is, which is what we really care about). To get the full augmented matrix into reduced row echelon form, you would need to multiply the bottom row by to get a leading and then turn everything above that into a zero for a total of three more completely useless steps. There isn't anything gained by doing these steps because at this point it is already clear that there are no solutions to the system...  However, if you are asked for reduced row echelon form of an augmented matrix, it will annoyingly expect those last steps.   When applying the Gaussian Elimination algorithm, the goal is to get the augmented matrix into row echelon form (Part 1) and\/or reduced row echelon form (Part 2). Here are the steps:   Step 0: If the matrix has only zeros in it, you are done!    Step 1: If any rows start out with one or more zeros, move them toward the bottom. The more zeros a row has before the first non-zero entry, the lower it goes on the list.    Step 2: Multiply Row 1 by the reciprocal of its first non-zero entry. This will give you your first leading .    Step 3: For each non-zero entry that appears directly below the leading , multiply Row 1 by the opposite (negative) of that number and add Row 1 to its row. This will give you all zeros below the leading .   Now the process is iterated! Apply the above procedure to the part of the matrix that excludes the first row and column. Repeat until either (1) the part you have left is all zeros, or (2) you get to the bottom of the matrix. In either case, the matrix will now be in row echelon form.   If you want to get a reduced row echelon form you will need to do Step 4:    Step 4: For each row that contains a leading , eliminate each non-zero entry above it by multiplying that row by the opposite of the non-zero entry and adding that to the row containing the non-zero entry.     Let's apply the method to try to solve this (larger) system of linear equations: The augmented matrix is Step 1 is already done since none of the rows starts out with a zero. So, let's do Step 2 and multiply the first equation by to get our first leading : Now let's do Step 3 and turn everything below our leading (in Row 1) into a zero! We will add times Row 1 to Row 2, add times Row 1 to Row 3, and add times Row 1 to Row 4. We get Now we imagine crossing out Row 1 and Column 1 and apply the method to what is left. Since the row with the most zeros in the beginning (Row 4) is already on the bottom and Row 2 and Row 3 have the same number of leading zeros, we still don't have to do anything for Step 1. Moving on to Step 2, we will multiply Row 2 by to get a leading in Row 2: Now we need to zero out all of the entries below this new leading . All we have to do is add times Row 2 to Row 3 to get And now our matrix is in row echelon form because everything below Row 2 is a zero!  To get our matrix into reduced row echelon form, we need to zero out everything above my leading s (Step 4). But there is nothing above the first leading obviously, so we just have to worry about the leading in Row 2. We will add times Row 2 to Row 1 to get Now the matrix is in reduced row echelon form!  If we convert the reduced row echelon form of the augmented matrix back to a system of linear equations, we get So we know that and we can see that . So the solution is or where is our parameter and can be anything.  But if we stopped early and converted to a system of linear equations after getting the matrix into row echelon form, we get Again, we know that and we can solve for in terms of and : But isn't a parameter! It's just , so we have to \"back substitute\", plugging this value into the equation for to get    But Richard... Should I use row echelon form or reduced row echelon form?  Both row echelon form and reduced row echelon form can be used to solve a system of equations. If it is EASY to do Step 4 and put your matrix into reduced row echelon form, you can basically just write down your answer! But if it is not so easy, then you are usually better off stopping with row echelon form IF your goal is just to solve the system. However, you will have to do an additional step of \"back substitution\" in order to solve the system.   Later on we will some applications of the algorithm that require reduced row echelon form. When the time comes, Richard will explain why it is needed in those cases.     Solve the following system of linear equations using the Gaussian Elimination algorithm.    The augmented matrix is   Step 1: Add times Row 1 to Row 2 (and replace Row 2) to get   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 3 (and replace Row 3) to get   Step 5: Multiply Row 3 by to get   Now the matrix is in row echelon form. We can convert it back to a system of linear equations. We get We will then back substitute to solve for and : Hence, the solution is .  Alternatively, we can keep going with the algorithm to obtain the reduced row echelon form of the augmented matrix.  Step 6: Add times Row 3 to Row 2 (and replace Row 2) to get   Step 7: Add times Row 3 to Row 1 (and replace Row 1) to get   Step 8: Add times Row 2 to Row 1 (and replace Row 1) to get Hence, the solution is .     How many parameters does the solution have?  We use parameters to write the solution only when there are infinitely many solutions. And we can tell how many parameters we have by counting how many leading s we have when we put our matrix in row echelon form!    All we have to do is to subtract the number of leading s from the total number of variables.   Each leading is associated with a variable that we can solve for in terms of the other variables. The author of your textbook calls these the \"leading variable\". The other variables are called \"free variables\" and these are the ones that can be used as parameters (or if you do it like the author, these are the variables you can set equal to new letters that you use for the parameters).  In the exapmle we just did, and are leading variables, and is the only free variable. So we only need one parameter to write the solution. The solution in parametric form is or if you want to use a new letter like the author would do.   Note: It doesn't matter whether you are in reduced row echelon form or just row echelon form, you will have the same number of leading s (and so the same number of leading variables and free variables).  Pretend that we had a system of 4 linear equations in 5 variables and we put the augmented matrix into row echelon form and we got This time we have 3 leading s, so we have 3 leading variables. These are , , and . We also have free variables, and they are and .  Since the matrix isn't in reduced row echelon form, we will have to do some back substitution to get the solution. Converting it to a system of linear equations, we get Now we will be able to see why it is called \"back substitution\", because we go backwards!  First, we will ignore the . It is true (which is important!) but it doesn't actually help us figure out the solution.  We see that , then we substitute that \"back\" into our second equation to get Then we substitute and back into our first equation to get So we will treat the and as free variables (parameters) and write the solution. The solution set is all points of the form where and can be any real numbers.  Because of the importance of the leading s, there are special terms for it.   Pivots, Pivot Columns, and Rank   A pivot position in a matrix is a location that corresponds to a leading in (reduced) row echelon form.  A pivot column is a column that contains a pivot position.  The rank of a matrix is the number of leading s in (reduced) row echelon form, which is the same as the number of pivot positions and the same as the number of pivot columns.     Note: Rank is a term reserved for regular matrices, not augmented matrices. If someone asks for the rank of an augmented matrix, they mean the coefficient part of the matrix (the part to the left of the vertical line(s)). Also, we will learn a better (but equivalent) definition of rank later in the term.    Existence and Uniqueness Questions  Imagine we have an inconsistent system of linear equations. Then its augmented matrix, in row echelon form, will have a row of the form which corresponds to the equation . The is a pivot position (since this is the first non-zero entry in its row and we can easily turn it into a leading ). This implies that a system is inconsistent if there is a pivot position in the rightmost column (the one to the right of the vertical lines(s) which represents the constant matrix). Furthermore, if there is a pivot position in the rightmost column, then the rightmost column is a pivot column. Let's make it a theorem!   Existence and Uniqueness Theorem   A linear system is consistent if and only if the rightmost column of the augmented matrix is NOT a pivot column. That is, if an only if an echelon form of the augmented matrix has no row of the form   If a linear system is consistent, then the solution set contains either (1) a unique solution, when there are no free variables, or (2) infinitely many solutions, when there is at least one free variable.    Next week, we will develop a (more sophisticated) version of the above theorem (using the rank of the matrices) when we learn more about matrices (and matrix equations). For now, we will just use the term \"pivot column\" instead of \"rank\" for our augmented matrices.   Each of the following matrices represents the augmented matrix of a system of linear equations. Determine whether the system is consistent or not, and if it is consistent, determine whether the solution is unique.                       The system is consistent because there is no pivot position in the rightmost column. Also, there is exactly one solution because there are three pivot positions and three variables.    The system is inconsistent because there is a pivot position in the rightmost column.    The system is consistent because there is no pivot position in the rightmost column. Also, there are infinitely many solutions because there are only three pivot positions but four variables, so there is a free variable.        "
},
{
  "id": "sec12-RowReduction-2-1",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian Elimination "
},
{
  "id": "sec12-RowReduction-2-2",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row echelon form reduced row echelon form pivots free variables "
},
{
  "id": "sec12-RowReduction-2-3",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     distinguish between a matrix in row echelon form and one in reduced row echelon form ;    apply the Gaussian Elimination Algorithm to transform an augmented matrix into (reduced) echelon form (aka row reduction);    perform back substitution to find the solution to a system whose augmented matrix is in echelon form;    identify free variables and use them to express the solution set in parametric form .    determine if a system is consistent by checking for pivots in the rightmost column of the augmented matrix.    "
},
{
  "id": "def-ReducedRowEchelonForm",
  "level": "2",
  "url": "sec12-RowReduction.html#def-ReducedRowEchelonForm",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Row Echelon Form and Reduced Row Echelon Form.",
  "body": " Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if:   Every row consisting of only zeros must appear at the bottom of the matrix.    The first entry in any non-zero row is a . These are called the \"leading\" 's.    Every leading has only zeros below it (a \"leading \" is a that is the first non-zero number in a row).     A matrix is in reduced row echelon form if conditions 1-3 above are met AND every leading has only zeros above it.   "
},
{
  "id": "sec12-RowReduction-15",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-15",
  "type": "Note",
  "number": "1.2.2",
  "title": "Some variations on the above definition.",
  "body": " Some variations on the above definition  If you read other textbooks, you may find that the second condition is considered as part of the definition condition for reduced row echelon form instead of row echelon form. That is, the first non-zero entry can be anything (of course, except for zero) in row echelon form, but it must be a (the leading ) in reduced row echelon form.  Practically, it doesn't make a difference how you define it, because you can always multiply a row by the reciprocal of its first non-zero entry to get a leading out of it.  "
},
{
  "id": "sec12-RowReduction-19",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-19",
  "type": "Note",
  "number": "1.2.3",
  "title": "Note on second example above.",
  "body": " Note on second example above  Technically, the full augmented matrix in the second example above is not in reduced row echelon form (but the coefficient matrix is, which is what we really care about). To get the full augmented matrix into reduced row echelon form, you would need to multiply the bottom row by to get a leading and then turn everything above that into a zero for a total of three more completely useless steps. There isn't anything gained by doing these steps because at this point it is already clear that there are no solutions to the system...  However, if you are asked for reduced row echelon form of an augmented matrix, it will annoyingly expect those last steps.  "
},
{
  "id": "sec12-RowReduction-26",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-26",
  "type": "Note",
  "number": "1.2.4",
  "title": "But Richard... Should I use row echelon form or reduced row echelon form?",
  "body": " But Richard... Should I use row echelon form or reduced row echelon form?  Both row echelon form and reduced row echelon form can be used to solve a system of equations. If it is EASY to do Step 4 and put your matrix into reduced row echelon form, you can basically just write down your answer! But if it is not so easy, then you are usually better off stopping with row echelon form IF your goal is just to solve the system. However, you will have to do an additional step of \"back substitution\" in order to solve the system.   Later on we will some applications of the algorithm that require reduced row echelon form. When the time comes, Richard will explain why it is needed in those cases.   "
},
{
  "id": "sec12-RowReduction-27",
  "level": "2",
  "url": "sec12-RowReduction.html#sec12-RowReduction-27",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": " Solve the following system of linear equations using the Gaussian Elimination algorithm.    The augmented matrix is   Step 1: Add times Row 1 to Row 2 (and replace Row 2) to get   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 3 (and replace Row 3) to get   Step 5: Multiply Row 3 by to get   Now the matrix is in row echelon form. We can convert it back to a system of linear equations. We get We will then back substitute to solve for and : Hence, the solution is .  Alternatively, we can keep going with the algorithm to obtain the reduced row echelon form of the augmented matrix.  Step 6: Add times Row 3 to Row 2 (and replace Row 2) to get   Step 7: Add times Row 3 to Row 1 (and replace Row 1) to get   Step 8: Add times Row 2 to Row 1 (and replace Row 1) to get Hence, the solution is .   "
},
{
  "id": "def-Pivot",
  "level": "2",
  "url": "sec12-RowReduction.html#def-Pivot",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Pivots, Pivot Columns, and Rank.",
  "body": " Pivots, Pivot Columns, and Rank   A pivot position in a matrix is a location that corresponds to a leading in (reduced) row echelon form.  A pivot column is a column that contains a pivot position.  The rank of a matrix is the number of leading s in (reduced) row echelon form, which is the same as the number of pivot positions and the same as the number of pivot columns.   "
},
{
  "id": "thm-ExistenceUniquenessTheorem",
  "level": "2",
  "url": "sec12-RowReduction.html#thm-ExistenceUniquenessTheorem",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "Existence and Uniqueness Theorem.",
  "body": " Existence and Uniqueness Theorem   A linear system is consistent if and only if the rightmost column of the augmented matrix is NOT a pivot column. That is, if an only if an echelon form of the augmented matrix has no row of the form   If a linear system is consistent, then the solution set contains either (1) a unique solution, when there are no free variables, or (2) infinitely many solutions, when there is at least one free variable.   "
},
{
  "id": "subsec-ExistenceUniqueness-AugmentedMatrices-5",
  "level": "2",
  "url": "sec12-RowReduction.html#subsec-ExistenceUniqueness-AugmentedMatrices-5",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": " Each of the following matrices represents the augmented matrix of a system of linear equations. Determine whether the system is consistent or not, and if it is consistent, determine whether the solution is unique.                       The system is consistent because there is no pivot position in the rightmost column. Also, there is exactly one solution because there are three pivot positions and three variables.    The system is inconsistent because there is a pivot position in the rightmost column.    The system is consistent because there is no pivot position in the rightmost column. Also, there are infinitely many solutions because there are only three pivot positions but four variables, so there is a free variable.      "
},
{
  "id": "sec13-VectorEquations",
  "level": "1",
  "url": "sec13-VectorEquations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Vector Equations",
  "body": " Vector Equations   In this section, we shift our perspective from viewing solutions as static points to treating them as dynamic objects: vectors . We will discover how to scale vectors, add them together, and combine them to explore new spaces.  In this section, we will define the \"goal\" states for our matrices: row echelon form and reduced row echelon form . We will also learn how to use these forms to quickly identify whether a system has a unique solution, infinitely many solutions, or no solution at all by identifying pivots and free variables .    After this section, students will be able to:     perform vector addition and scalar multiplication algebraically, and justify these operations geometrically using the Parallelogram Law.    construct linear combinations of vectors and determine whether a given vector can be generated by a specific set of vectors.    convert between systems of linear equations, augmented matrices, and vector equations.    define the span of a set of vectors and visualize its geometric interpretations in and .       What is a vector?  We already know that we can represent a point in the plane as an ordered pair like . And we also know that two points in the plane, and , are equal if (and only if) both coordinates are exactly the same. In other words, if and only if and .  This generalizes immediately to the set of ordered -tuples of real numbers : And if and only if , , , .  For example, the point is a point in -space (we represent -space by ). In linear algebra, such points can also be represented as matrices (row vectors) or matrices (column vectors). So can be represented as the row vector or the column vector In this class, we will mostly use column vectors for reasons that will become clear in Section 2.1.  We can define two basic operations to vectors: vector addition and scalar multiplication . They both work component-wise .  To give you a basic idea on what they mean, let's consider the vectors and in . To add these vectors, we add the corresponding entries together: If there is a scalar . To multiply the vector by this scalar, we multiply each entry of the vector by this scalar:   You may notice that all of the vector notations above are bolded. That is because there is a difference between a vector and a scalar, but we use lower-case letters to represent them both. This bolded notation is used to distinguish what exactly the letter represent, a vector (bolded) or a scalar (not bolded).  You may have heard in the past that vectors are things with direction and length, and it is usually denoted by an arrow (instead of a point). This is also correct. Geometrically speaking, a better visualization of vectors is to think about them as an arrow from the origin to the point .   But why are arrows the better visualization geometrically? Well think about the two basic operations. It doesn't quite make sense to observe any relations of them if there are just a bunch of points out there. However, we can observe how the vectors behave in the two basic operations if they are represented by arrow.  For Vector addition , we can imagine a vector as the movement from the tail to the tip. Then adding two vectors means performing the movements one after another. We can construct a parallelogram using the two vectors as adjacent sides, and the resulting vector is the diagonal of the parallelogram starting from the common tail of the two vectors. This is called the Parallelogram Law .   Parallelogram Law for Vector Addition   If , then is the fourth vertex of the parallelogram with vertices at the origin, , and .      Vector Addition using the Parallelogram Law   Now let's look at scalar multiplication . The term scalar refers to a real number. That is, scalar multiplication tells us how to multiply a vector by a real number. The scalar will \"scale\" or \"resize\" the vector.  When the scalar is positive, the resulting vector points in the same direction, and the size of the vector is scaled by the scalar.    Vector Addition using the Parallelogram Law   When the scalar is negative, the resulting vector points in the opposite direction, and the size of the vector is scaled by the absolute value of the scalar.    Vector Multiplication by a Negative Scalar   But what if the scalar is zero? We can quickly see that the magnitude of the resulting vector is zero, so the resulting vector is the zero vector , denoted by . We can imagine the zero vector has the tail and tip at the same point, which means it doesn't have a specific direction. Alternatively, we can say that the zero vector points in all directions.  Once we have vector addition and scalar multiplication defined, we can subtract two vectors. Recall subtraction is really the same thing as adding the opposite. That is, Graphically, we can find as follows:    Vector Subtraction    Let and . Find and . Also, sketch these vectors on the plane.   We compute the vectors as follows:  The sketches of the vectors are shown below:    The sketch of and .     Last but not least, if we consider the set of all vectors in , then each vector can be expressed as Just like how we add and scalar-multiply vectors in , we do the same thing in (component-wise).   has many nice properties and they should be self-explanatory.   Properties of   Let and . Then the following properties hold:                                              The proofs are not too difficult. Feel free to try them out on your own!  P.S. They are pretty much the axioms of a vector space.    Linear Combinations  Long story short, a linear combination of a set of vectors is a sum of scalar multiples of those vectors.      is a linear combination of and since      is also a linear combination of and since      Let's formalize the concept of linear combinations in !    The linear combination of vectors with weights  is the vector      Can be written as a linear combination of and ?   Let's assume we can! Then there exist scalars such that Can we find such scalars?    The equation in the hint is a vector equation since the coefficients and the constants are vectors. We can rewrite the vector equation as a system of linear equations: Basically, we are asking ourselves if this system of linear equations has a solution.  We are all experts in solving systems of linear equations now! The augmented matrix is We can do our Gaussian Elimination magic to get: Converting back to a system of linear equations, we have   Now we check our work! We did it!     Let , , and . Is a linear combination of and ?   To determine if is a linear combination of and , we need to establish whether there exist scalar weights and that satisfy the vector equation:   This vector equation corresponds directly to a system of linear equations. We can explore whether such a combination exists by setting up and row reducing the associated augmented matrix:   The reduced echelon form reveals that the system is consistent, meaning a valid set of weights exists. Specifically, the system tells us that and .  Because we found a consistent solution, we can conclude that is indeed a linear combination of and . We can justify this geometrically and algebraically by writing out the explicit combination:     Based on the above example, we can see that a system of linear equations can be expressed as a vector equation . That is, the coefficients of the variables are the column vectors making up the left side of the augmented matrix, and the constant is the column vector making up the right side of the augmented matrix. As an example, for a system of linear equations The augmented matrix is Observe that the left side of the augmented matrix has three column vectors and the right side of the augmented matrix has one column vector. So we can rewrite the system of linear equations as a vector equation: This is a vector equation because the coefficients and the constants are vectors.  If this system is consistent, then we know that the constant column vector is indeed a linear combinations of the column vectors that represent the coefficients of the variable. That is, if an augmented matrix is and the system of linear equations represented by this augmented matrix is consistent, then is a linear combination of .    Span  Now that we have linear combinations, it is important to know what vectors may or may not be a linear combination of a particular set of vectors. This leads us to one of the biggest definitions of the entire course, the span of a a set of vectors.    Suppose . The span of , denoted by is the set of all linear combinations of .  Symbolically, we have     To put it in words, the span of a set of vectors is the set of all possible linear combinations of those vectors. To connect this back to the previous section, we know that a vector equation is consistent if the constant vector is a linear combination of the column vectors that represent the coefficients of the variables. To put it in another way, a vector equation is consistent if the constant vector is in the span of the column vectors that represent the coefficients of the variables.   Is ?   Last but not least, we can envision the span of a set of vectors geometrically if things are not too crazy.  Let's say we are in . We pick two vectors and that are not scalar multiples of each other. Then the following picture shows and :    "
},
{
  "id": "sec13-VectorEquations-2-1",
  "level": "2",
  "url": "sec13-VectorEquations.html#sec13-VectorEquations-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vectors "
},
{
  "id": "sec13-VectorEquations-2-2",
  "level": "2",
  "url": "sec13-VectorEquations.html#sec13-VectorEquations-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row echelon form reduced row echelon form pivots free variables "
},
{
  "id": "sec13-VectorEquations-2-3",
  "level": "2",
  "url": "sec13-VectorEquations.html#sec13-VectorEquations-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     perform vector addition and scalar multiplication algebraically, and justify these operations geometrically using the Parallelogram Law.    construct linear combinations of vectors and determine whether a given vector can be generated by a specific set of vectors.    convert between systems of linear equations, augmented matrices, and vector equations.    define the span of a set of vectors and visualize its geometric interpretations in and .    "
},
{
  "id": "subsec-VectorsNotation-5",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-VectorsNotation-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector addition scalar multiplication "
},
{
  "id": "subsec-VectorsNotation-11",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-VectorsNotation-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vector addition Parallelogram Law "
},
{
  "id": "thm-ParallelogramLaw-VectorAddition",
  "level": "2",
  "url": "sec13-VectorEquations.html#thm-ParallelogramLaw-VectorAddition",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "Parallelogram Law for Vector Addition.",
  "body": " Parallelogram Law for Vector Addition   If , then is the fourth vertex of the parallelogram with vertices at the origin, , and .   "
},
{
  "id": "subsec-VectorsNotation-13",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-VectorsNotation-13",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": "  Vector Addition using the Parallelogram Law  "
},
{
  "id": "subsec-VectorsNotation-14",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-VectorsNotation-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar multiplication "
},
{
  "id": "subsec-VectorsNotation-16",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-VectorsNotation-16",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": "  Vector Addition using the Parallelogram Law  "
},
{
  "id": "subsec-VectorsNotation-18",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-VectorsNotation-18",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": "  Vector Multiplication by a Negative Scalar  "
},
{
  "id": "subsec-VectorsNotation-19",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-VectorsNotation-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero vector "
},
{
  "id": "subsec-VectorsNotation-21",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-VectorsNotation-21",
  "type": "Figure",
  "number": "1.3.5",
  "title": "",
  "body": "  Vector Subtraction  "
},
{
  "id": "subsec-VectorsNotation-22",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-VectorsNotation-22",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "",
  "body": " Let and . Find and . Also, sketch these vectors on the plane.   We compute the vectors as follows:  The sketches of the vectors are shown below:    The sketch of and .    "
},
{
  "id": "thm-Property-Rn",
  "level": "2",
  "url": "sec13-VectorEquations.html#thm-Property-Rn",
  "type": "Theorem",
  "number": "1.3.8",
  "title": "Properties of <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Properties of   Let and . Then the following properties hold:                                             "
},
{
  "id": "subsec-LinearCombinations-3",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-LinearCombinations-3",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "    is a linear combination of and since      is also a linear combination of and since     "
},
{
  "id": "def-LinearCombination-Rn",
  "level": "2",
  "url": "sec13-VectorEquations.html#def-LinearCombination-Rn",
  "type": "Definition",
  "number": "1.3.10",
  "title": "",
  "body": "  The linear combination of vectors with weights  is the vector    "
},
{
  "id": "subsec-LinearCombinations-6",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-LinearCombinations-6",
  "type": "Example",
  "number": "1.3.11",
  "title": "",
  "body": " Can be written as a linear combination of and ?   Let's assume we can! Then there exist scalars such that Can we find such scalars?    The equation in the hint is a vector equation since the coefficients and the constants are vectors. We can rewrite the vector equation as a system of linear equations: Basically, we are asking ourselves if this system of linear equations has a solution.  We are all experts in solving systems of linear equations now! The augmented matrix is We can do our Gaussian Elimination magic to get: Converting back to a system of linear equations, we have   Now we check our work! We did it!   "
},
{
  "id": "subsec-LinearCombinations-7",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-LinearCombinations-7",
  "type": "Checkpoint",
  "number": "1.3.12",
  "title": "",
  "body": " Let , , and . Is a linear combination of and ?   To determine if is a linear combination of and , we need to establish whether there exist scalar weights and that satisfy the vector equation:   This vector equation corresponds directly to a system of linear equations. We can explore whether such a combination exists by setting up and row reducing the associated augmented matrix:   The reduced echelon form reveals that the system is consistent, meaning a valid set of weights exists. Specifically, the system tells us that and .  Because we found a consistent solution, we can conclude that is indeed a linear combination of and . We can justify this geometrically and algebraically by writing out the explicit combination:    "
},
{
  "id": "subsec-LinearCombinations-8",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-LinearCombinations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector equation "
},
{
  "id": "subsec-Span-2",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-Span-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "span "
},
{
  "id": "def-Span",
  "level": "2",
  "url": "sec13-VectorEquations.html#def-Span",
  "type": "Definition",
  "number": "1.3.13",
  "title": "",
  "body": "  Suppose . The span of , denoted by is the set of all linear combinations of .  Symbolically, we have    "
},
{
  "id": "subsec-Span-5",
  "level": "2",
  "url": "sec13-VectorEquations.html#subsec-Span-5",
  "type": "Example",
  "number": "1.3.14",
  "title": "",
  "body": " Is ?  "
},
{
  "id": "sec14-MatrixEquation",
  "level": "1",
  "url": "sec14-MatrixEquation.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Matrix Equation <span class=\"process-math\">\\(A\\v{x} = \\v{b}\\)<\/span>",
  "body": " The Matrix Equation   Now we get to the cool part! We are going to learn how to multiply a matrix by a vector. This is SUPER IMPORTANT for three reasons:   This corresponds to evaluating a linear transformation at a point which leads to tons of cool geometry stuff. Much more about this in the future!    It is the foundation for multiplying matrices (which is probably the most important thing in Matrix Algebra and corresponds to composing linear transformations).    It gives us new ways to think about systems of equations!   Takeaway: make sure you are an expert at multiplying a vector by a matrix!    After this section, students will be able to:     represent a system of linear equations in four equivalent forms: a system of equations, an augmented matrix, a matrix equation, and a vector equation.    multiply a matrix by a vector using both the dot product method and the linear combination method.    determine the existence of solutions for a system of linear equations by comparing the rank of the coefficient matrix and the rank of the augmented matrix.    see the connection between matrix-vector multiplication and linear transformations.    identify and apply the properties of two special matrices: the identity matrix and the zero matrix, in the context of multiplying a matrix by a vector.       What exactly is an Augmented Matrix?  Consider the augmented matrix You may have heard Richard saying that an augmented matrix is a \"fake\" matrix but is really just a shorthand notation to represent a system of linear equations. It turns out that an augmented matrix actually hides three matrices, two of which are vectors (aka. column matrices). Hence, an augmented matrix is really three matrices smashed together to represent a system of linear equations in a convenient way.  The left side of an augmented matrix is the coefficient matrix . For our (general) example above, the coefficient matrix is   The right side of an augmented matrix is the constant matrix or constant (column) vector . For our example, the constant vector is   To figure out what the third matrix\/vector is, let's convert the augmented matrix to a system of linear equations! For our example, we get First, notice that this system of equations can be seen as one equation involving two matrices\/vectors! You may have noticed that the solution is the one part of our system that we haven't talked about as a matrix\/vector yet. Well let's fix that now!  The vector on the left-hand side is the one that we get when we multiply the coefficient matrix by the solution vector  when represented as a column vector: In other words our system of equations can be represented by the matrix equation : Or using the names of the matrices:     Multiplying a Matrix by a Vector  Now let's take a deeper look at the product and try to figure out how to multiply a matrix by a vector. For our example, we had So what is happening?  First notice that we are multiplying a matrix by a matrix and getting a matrix. Also, notice that the first (top) entry of the answer is achieved by multiplying each entry in the first row of the matrix by the corresponding entry of the column vector and adding the results. First thing in the row times first thing in the column plus second thing in the row times second thing in the column and so on...   The first entry is    Then the second entry in the answer is achieved in the same way but using the second row of the matrix :   The second entry is    Then the third entry in the answeris achieved in the same way but using the third row of the matrix :   The third entry is    And finally the fourth entry in the answer is achieved in the same way but using the fourth row of the matrix :   The fourth entry is    When we run out of rows of , we are done!   Let's try this out with the following product of a matrix and a vector:   First, we take the first row of the matrix and multiply each entry by the corresponding entry in the column vector and add the results: Next, we take the second row of the matrix and do the same thing: Finally, we take the third row of the matrix and do the same thing: So the answer is     Multiply! If it is impossible, say why!               a.   b. This is impossible! There are three things in each row of the matrix but four things in the vector. There is nothing to multiply by the !      Existence and Uniqueness Questions  Recall a consistent system of linear equations has at least one solution and an inconsistent system of linear equations has no solutions. We have looked at the existence question in the past in three different ways:   In , when converting an augmented matrix to a system of linear equations and there is one equation that is always false (like ), then the system is inconsistent .    In , when an augmented matrix has a pivot position in the rightmost column (aka the constant column), then the system is inconsistent .   We will look at the same question again but in a new perspective. Back in , we define the rank of a matrix to be the number of pivot positions (aka the leading s) in the matrix. Now that we have two different matrices: the augmented matrix and the coefficient matrix, how do their ranks relate to the existence question?  Consider the following system of equations: The augmented matrix is... If we put this matrix into row echelon form, we get Notice that the rank of this augmented matrix (if we pretend it is a real matrix) is because there are two leading s. But if we look only at the coefficient matrix (the part to the left of the vertical lines) we see that the rank is because there is only one leading .   Those ranks are different! Maybe that means something?   Let's write this nice (row echelon) version of the system as a matrix equation! The coefficient matrix is and the constant vector is . This is a two-variable system, so the solution matrix looks like . So as a matrix equation, our system is   Okay... so now let's think about what will happen when we multiply our vector by the coefficient matrix . When we get to the second row (to find the second entry in the answer), we will multiply both and by zero. That means we will get not like we are supposed to get! So this system has no solution! In other words, it is inconsistent !   Notice that this happened because the rank of the augmented matrix was BIGGER than the rank of the coefficient matrix!   That can only happen if there is a leading in the last column of the augmented matrix (the constant vector). And that will always result in no solution because it will always give you when you convert back to a system of equations (see how things are connected back to the two perspectives of the existence questions).   You will investigate further about the relationship between the rank and the system of linear equations further in Lab Report #1.     Vector Equations  So far we have three different ways to represent a system of linear equations: (1) as a system of equations, (2) as an augmented matrix, and (3) as a matrix equation. There is actually a fourth way to represent a system of linear equations: as a vector equation .  Let's again consider the system of linear equations Remember that we can think of our original system of equations as representing an equation involving two vectors: Now let's do the same technique we used to write a solution as a linear combination of basic vectors. Specifically, let's first break up the vector on the left-hand side into three vectors. One with in it, one with in it, and one with in it: Now let's factor out the scalars , , and to get: Substituting this last version into our original equation, we get the vector equation : Notice that this vector equation tells us that we get a solution to a system of linear equations precisely when the constant vector is a linear combination of the columns of the coefficient matrix . See how the column vectors on the left-hand side are just the columns of the coefficient matrix?!?! See how the solution vector is just the set of scalars (coefficients) used to write this linear combination of the column vectors?!?! This observation will be important to keep in mind!   Consider the following system of linear equations: Write this system as a (1) Augmented Matrix, (2) a Matrix Equation, and (3) a Vector Equation.   The augmented matrix is   The matrix equation is   The vector equation is     The Vector Equation gives us yet another way to multiply a vector by a matrix! Let's compare the Matrix Equation and the Vector Equation for a system of linear equations: The Matrix Equation is The Vector Equation is This means that So that means that the left-hand side of the Vector Equation actually gives us a second way to multiply a vector by a matrix. You just compute the linear combination of the columns using the vector to get your scalars.   Let's multiply the following matrix and vector in this new way:   We treat the columns of the matrix as vectors and compute the linear combination of those vectors using the entries of the column vector as our scalars. This is the same answer as before!     Intro to the Dot Product  The first method of multiplying matrices that we learned was actually based on the dot product which is an operation performed on two vectors (of the same size) and the produces a scalar . Sometimes it is actually called a scalar product to emphasize the fact that the output is a scalar.  So how does it work? Let's look at the formula for multiplying a vector by a matrix. For the case of a general matrix, we saw that we could multiply by a column vector. Notice that this result actually comes from performing the same process four different times (once for each row of the matrix).  What we were actually doing was taking the dot product of each row with the column vector. So our multiplication computation consisted of four dot products each of which gave us one of the entries in our answer.   Dot Product   Let and be two vectors in . The dot product of and , denoted by , is the scalar given by the formula      Let's compute the dot product of the vectors and .    Scroll up a bit and you will see the dot product formula show up in each entry where we multiplied the general matrix by a vector. To get the th entry of the answer, we can take the dot product of the th row of the matrix and the vector.  We will talk more about this soon when we learn how to multiply two matrices together.    Two Special Matrices  Recall there are two special numbers in arithmetic: and , in the sense that (1) times any number is and (2) times any number is that same number. There are also two special matrices in matrix arithmetic that play the same role as and do in regular arithmetic.  In the last section, we defined the zero matrix to be the matrix with all entries equal to . If is the zero matrix then for any vector , we have where is the zero vector in .  That is because each time you compute a dot product to get an entry of the answer, you are taking a dot product with a row vector where all entries are zero. So you are always just adding up a bunch of zeros. So you will always get zero for every entry in the product.  The matrix equivalent of is called the identity matrix . That is, when we multiply the identity matrix by a vector, we get the same vector back.  For every positive integer , there is a special matrix called the identity matrix of size . The identity matrix has a in every entry of the main diagonal and a in every other spot.  For example, the identity matrix of size is and the identity matrix of size is When the size is obvious from context, we don't need the little subscript in the name for the identity matrix. We just call it .  But why does the identity matrix look like that? Imagine we multiply by an arbitrary vector . We get    "
},
{
  "id": "sec14-MatrixEquation-2-2",
  "level": "2",
  "url": "sec14-MatrixEquation.html#sec14-MatrixEquation-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     represent a system of linear equations in four equivalent forms: a system of equations, an augmented matrix, a matrix equation, and a vector equation.    multiply a matrix by a vector using both the dot product method and the linear combination method.    determine the existence of solutions for a system of linear equations by comparing the rank of the coefficient matrix and the rank of the augmented matrix.    see the connection between matrix-vector multiplication and linear transformations.    identify and apply the properties of two special matrices: the identity matrix and the zero matrix, in the context of multiplying a matrix by a vector.    "
},
{
  "id": "subsec-DecodeAugmentedMatrix-3",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-DecodeAugmentedMatrix-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix "
},
{
  "id": "subsec-DecodeAugmentedMatrix-4",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-DecodeAugmentedMatrix-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant matrix constant (column) vector "
},
{
  "id": "subsec-DecodeAugmentedMatrix-6",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-DecodeAugmentedMatrix-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix equation "
},
{
  "id": "subsec-MultiplyingMatrixVector-4",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-MultiplyingMatrixVector-4",
  "type": "Example",
  "number": "1.4.1",
  "title": "",
  "body": " Let's try this out with the following product of a matrix and a vector:   First, we take the first row of the matrix and multiply each entry by the corresponding entry in the column vector and add the results: Next, we take the second row of the matrix and do the same thing: Finally, we take the third row of the matrix and do the same thing: So the answer is   "
},
{
  "id": "subsec-MultiplyingMatrixVector-5",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-MultiplyingMatrixVector-5",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "",
  "body": " Multiply! If it is impossible, say why!               a.   b. This is impossible! There are three things in each row of the matrix but four things in the vector. There is nothing to multiply by the !   "
},
{
  "id": "subsec-ExistenceUniqueness-Rank-2",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-ExistenceUniqueness-Rank-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent inconsistent rank "
},
{
  "id": "subsec-VectorEquations-2",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-VectorEquations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector equation "
},
{
  "id": "subsec-VectorEquations-3",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-VectorEquations-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector equation "
},
{
  "id": "subsec-VectorEquations-4",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-VectorEquations-4",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "",
  "body": " Consider the following system of linear equations: Write this system as a (1) Augmented Matrix, (2) a Matrix Equation, and (3) a Vector Equation.   The augmented matrix is   The matrix equation is   The vector equation is    "
},
{
  "id": "subsec-VectorEquations-6",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-VectorEquations-6",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": " Let's multiply the following matrix and vector in this new way:   We treat the columns of the matrix as vectors and compute the linear combination of those vectors using the entries of the column vector as our scalars. This is the same answer as before!  "
},
{
  "id": "subsec-DotProduct-Intro-2",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-DotProduct-Intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product scalar product "
},
{
  "id": "subsec-DotProduct-Intro-4",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-DotProduct-Intro-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "def-DotProduct-Intro",
  "level": "2",
  "url": "sec14-MatrixEquation.html#def-DotProduct-Intro",
  "type": "Definition",
  "number": "1.4.5",
  "title": "Dot Product.",
  "body": " Dot Product   Let and be two vectors in . The dot product of and , denoted by , is the scalar given by the formula    "
},
{
  "id": "subsec-DotProduct-Intro-6",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-DotProduct-Intro-6",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": " Let's compute the dot product of the vectors and .   "
},
{
  "id": "subsec-ZeroMatrix-IdentityMatrix-3",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-ZeroMatrix-IdentityMatrix-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero matrix "
},
{
  "id": "subsec-ZeroMatrix-IdentityMatrix-5",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-ZeroMatrix-IdentityMatrix-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "subsec-ZeroMatrix-IdentityMatrix-6",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-ZeroMatrix-IdentityMatrix-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
