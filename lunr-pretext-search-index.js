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
  "body": " The Matrix Equation   Now we get to the cool part! We are going to learn how to multiply a matrix by a vector. This is SUPER IMPORTANT for three reasons:   This corresponds to evaluating a linear transformation at a point which leads to tons of cool geometry stuff. Much more about this in the future!    It is the foundation for multiplying matrices (which is probably the most important thing in Matrix Algebra and corresponds to composing linear transformations).    It gives us new ways to think about systems of equations!   Takeaway: make sure you are an expert at multiplying a vector by a matrix!    After this section, students will be able to:     represent a system of linear equations in four equivalent forms: a system of equations, an augmented matrix, a matrix equation, and a vector equation.    multiply a matrix by a vector using both the dot product method and the linear combination method.    determine the existence of solutions for a system of linear equations by comparing the rank of the coefficient matrix and the rank of the augmented matrix.    see the connection between matrix-vector multiplication and linear transformations.    identify and apply the properties of two special matrices: the identity matrix and the zero matrix, in the context of multiplying a matrix by a vector.       What exactly is an Augmented Matrix?  Consider the augmented matrix You may have heard Richard saying that an augmented matrix is a \"fake\" matrix but is really just a shorthand notation to represent a system of linear equations. It turns out that an augmented matrix actually hides three matrices, two of which are vectors (aka. column matrices). Hence, an augmented matrix is really three matrices smashed together to represent a system of linear equations in a convenient way.  The left side of an augmented matrix is the coefficient matrix . For our (general) example above, the coefficient matrix is   The right side of an augmented matrix is the constant matrix or constant (column) vector . For our example, the constant vector is   To figure out what the third matrix\/vector is, let's convert the augmented matrix to a system of linear equations! For our example, we get First, notice that this system of equations can be seen as one equation involving two matrices\/vectors! You may have noticed that the solution is the one part of our system that we haven't talked about as a matrix\/vector yet. Well let's fix that now!  The vector on the left-hand side is the one that we get when we multiply the coefficient matrix by the solution vector  when represented as a column vector: In other words our system of equations can be represented by the matrix equation : Or using the names of the matrices:     Multiplying a Matrix by a Vector  Now let's take a deeper look at the product and try to figure out how to multiply a matrix by a vector. For our example, we had So what is happening?  First notice that we are multiplying a matrix by a matrix and getting a matrix. Also, notice that the first (top) entry of the answer is achieved by multiplying each entry in the first row of the matrix by the corresponding entry of the column vector and adding the results. First thing in the row times first thing in the column plus second thing in the row times second thing in the column and so on...   The first entry is    Then the second entry in the answer is achieved in the same way but using the second row of the matrix :   The second entry is    Then the third entry in the answeris achieved in the same way but using the third row of the matrix :   The third entry is    And finally the fourth entry in the answer is achieved in the same way but using the fourth row of the matrix :   The fourth entry is    When we run out of rows of , we are done!   Let's try this out with the following product of a matrix and a vector:   First, we take the first row of the matrix and multiply each entry by the corresponding entry in the column vector and add the results: Next, we take the second row of the matrix and do the same thing: Finally, we take the third row of the matrix and do the same thing: So the answer is     Multiply! If it is impossible, say why!               a.   b. This is impossible! There are three things in each row of the matrix but four things in the vector. There is nothing to multiply by the !      Existence and Uniqueness Questions  Recall a consistent system of linear equations has at least one solution and an inconsistent system of linear equations has no solutions. We have looked at the existence question in the past in three different ways:   In , when converting an augmented matrix to a system of linear equations and there is one equation that is always false (like ), then the system is inconsistent .    In , when an augmented matrix has a pivot position in the rightmost column (aka the constant column), then the system is inconsistent .   We will look at the same question again but in a new perspective. Back in , we define the rank of a matrix to be the number of pivot positions (aka the leading s) in the matrix. Now that we have two different matrices: the augmented matrix and the coefficient matrix, how do their ranks relate to the existence question?  Consider the following system of equations: The augmented matrix is... If we put this matrix into row echelon form, we get Notice that the rank of this augmented matrix (if we pretend it is a real matrix) is because there are two leading s. But if we look only at the coefficient matrix (the part to the left of the vertical lines) we see that the rank is because there is only one leading .   Those ranks are different! Maybe that means something?   Let's write this nice (row echelon) version of the system as a matrix equation! The coefficient matrix is and the constant vector is . This is a two-variable system, so the solution matrix looks like . So as a matrix equation, our system is   Okay... so now let's think about what will happen when we multiply our vector by the coefficient matrix . When we get to the second row (to find the second entry in the answer), we will multiply both and by zero. That means we will get not like we are supposed to get! So this system has no solution! In other words, it is inconsistent !   Notice that this happened because the rank of the augmented matrix was BIGGER than the rank of the coefficient matrix!   That can only happen if there is a leading in the last column of the augmented matrix (the constant vector). And that will always result in no solution because it will always give you when you convert back to a system of equations (see how things are connected back to the two perspectives of the existence questions).   You will investigate further about the relationship between the rank and the system of linear equations further in Lab Report #1.     Vector Equations  So far we have three different ways to represent a system of linear equations: (1) as a system of equations, (2) as an augmented matrix, and (3) as a matrix equation. There is actually a fourth way to represent a system of linear equations: as a vector equation .  Let's again consider the system of linear equations Remember that we can think of our original system of equations as representing an equation involving two vectors: Now let's do the same technique we used to write a solution as a linear combination of basic vectors. Specifically, let's first break up the vector on the left-hand side into three vectors. One with in it, one with in it, and one with in it: Now let's factor out the scalars , , and to get: Substituting this last version into our original equation, we get the vector equation : Notice that this vector equation tells us that we get a solution to a system of linear equations precisely when the constant vector is a linear combination of the columns of the coefficient matrix . See how the column vectors on the left-hand side are just the columns of the coefficient matrix?!?! See how the solution vector is just the set of scalars (coefficients) used to write this linear combination of the column vectors?!?! This observation will be important to keep in mind!   Consider the following system of linear equations: Write this system as a (1) Augmented Matrix, (2) a Matrix Equation, and (3) a Vector Equation.   The augmented matrix is   The matrix equation is   The vector equation is     The Vector Equation gives us yet another way to multiply a vector by a matrix! Let's compare the Matrix Equation and the Vector Equation for a system of linear equations: The Matrix Equation is The Vector Equation is This means that So that means that the left-hand side of the Vector Equation actually gives us a second way to multiply a vector by a matrix. You just compute the linear combination of the columns using the vector to get your scalars.   Let's multiply the following matrix and vector in this new way:   We treat the columns of the matrix as vectors and compute the linear combination of those vectors using the entries of the column vector as our scalars. This is the same answer as before!     Intro to the Dot Product  The first method of multiplying matrices that we learned was actually based on the dot product which is an operation performed on two vectors (of the same size) and the produces a scalar . Sometimes it is actually called a scalar product to emphasize the fact that the output is a scalar.  So how does it work? Let's look at the formula for multiplying a vector by a matrix. For the case of a general matrix, we saw that we could multiply by a column vector. Notice that this result actually comes from performing the same process four different times (once for each row of the matrix).  What we were actually doing was taking the dot product of each row with the column vector. So our multiplication computation consisted of four dot products each of which gave us one of the entries in our answer.   Dot Product   Let and be two vectors in . The dot product of and , denoted by , is the scalar given by the formula      Let's compute the dot product of the vectors and .    Scroll up a bit and you will see the dot product formula show up in each entry where we multiplied the general matrix by a vector. To get the th entry of the answer, we can take the dot product of the th row of the matrix and the vector.  We will talk more about this soon when we learn how to multiply two matrices together.    Two Special Matrices  Recall there are two special numbers in arithmetic: and , in the sense that (1) times any number is and (2) times any number is that same number. There are also two special matrices in matrix arithmetic that play the same role as and do in regular arithmetic.  In the last section, we defined the zero matrix to be the matrix with all entries equal to . If is the zero matrix then for any vector , we have where is the zero vector in .  That is because each time you compute a dot product to get an entry of the answer, you are taking a dot product with a row vector where all entries are zero. So you are always just adding up a bunch of zeros. So you will always get zero for every entry in the product.  The matrix equivalent of is called the identity matrix . That is, when we multiply the identity matrix by a vector, we get the same vector back.  For every positive integer , there is a special matrix called the identity matrix of size . The identity matrix has a in every entry of the main diagonal and a in every other spot.  For example, the identity matrix of size is and the identity matrix of size is When the size is obvious from context, we don't need the little subscript in the name for the identity matrix. We just call it .  But why does the identity matrix look like that? Imagine we multiply by an arbitrary vector . We get     Existence of Solutions  Recall we have spent a lot of time to discuss whether a system of linear equations is consistent or not. The following theorem establishes equivalent statements to connect the idea of consistent system and linear combinations (and span) together.    Let be an matrix. Then the following statements are logically equivalent. That is, for a particular , either they are all true statements or they are all false.   For each in , the equation has a solution.    Each in is a linear combination of the columns of .    The columns of span .     has a pivot position in every row.       This theorem is not hard to prove. Observe that part (b) and part (c) are essentially the same thing (they are!) said in two different ways. Also, if the matrix equation is consistent (i.e., we can find a solution), we can convert it to a vector equation, suggesting that is a linear combination of the columns of (and vice versa!). To make it happen, there cannot be a pivot position in the constant column. That is, we need to max out the pivot position in the coefficient matrix , and hence, each row in must have a pivot position.  In practice, we can determine part (d) of the theorem easily (just row reduce the matrix and observe the pivot positions!). If we can establish part (d) is true, then the rest of the other three statements must be true as well!   Let . And we want to determine if the columns of spans . That is, can any vectors in be written as a linear combination of the columns of ...  Well this is super difficult to tackle since we can't possibly check every single vector in ... Alternatively, it is a lot easy to check the pivot positions of !  Converting the matrix to the reduced row echelon form, we obtain There are three pivot positions, so each row contains a pivot position. That is, part (d) of the above theorem is true.  By this theorem, we know that the other three statements are also true, and hence, the columns of spans .  But what if we do want to solve this problem without relying on this cool theorem... How can we check every single vectors in to make sure they can be written as a linear combination of the columns of ...  While it is impossible to check every single vectors in , it is totally possible to check an arbitrary vector in . So let's assume is an arbitrary vector in . That is, .  We know that can be written as a linear combination of the columns of if is consistent. So we want to row reduce the augmented matrix and observe whether we can get a solution out of it. The augmented matrix looks something like this: When we row reduce this matrix, the reduced row echelon form of will be the same, and we just attach a constant column to the right of it (something like this:) where , , and are just the numbers obtained by applying the elementary row operations to , , and , respectively. But the system is always consistent regardless of these values, since there is no pivot position in the rightmost column. Hence, an arbitrary vector in can be written as a linear combination of the columns of .  Well an arbitrary vector can be any vector in . We essentially just established that every vector can be written as a linear combination of the columns of , and hence the columns of spans .    "
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
  "id": "thm-Equivalent-Consistent-Span",
  "level": "2",
  "url": "sec14-MatrixEquation.html#thm-Equivalent-Consistent-Span",
  "type": "Theorem",
  "number": "1.4.7",
  "title": "",
  "body": "  Let be an matrix. Then the following statements are logically equivalent. That is, for a particular , either they are all true statements or they are all false.   For each in , the equation has a solution.    Each in is a linear combination of the columns of .    The columns of span .     has a pivot position in every row.      "
},
{
  "id": "subsec-ExistenceSolutions-6",
  "level": "2",
  "url": "sec14-MatrixEquation.html#subsec-ExistenceSolutions-6",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": " Let . And we want to determine if the columns of spans . That is, can any vectors in be written as a linear combination of the columns of ...  Well this is super difficult to tackle since we can't possibly check every single vector in ... Alternatively, it is a lot easy to check the pivot positions of !  Converting the matrix to the reduced row echelon form, we obtain There are three pivot positions, so each row contains a pivot position. That is, part (d) of the above theorem is true.  By this theorem, we know that the other three statements are also true, and hence, the columns of spans .  But what if we do want to solve this problem without relying on this cool theorem... How can we check every single vectors in to make sure they can be written as a linear combination of the columns of ...  While it is impossible to check every single vectors in , it is totally possible to check an arbitrary vector in . So let's assume is an arbitrary vector in . That is, .  We know that can be written as a linear combination of the columns of if is consistent. So we want to row reduce the augmented matrix and observe whether we can get a solution out of it. The augmented matrix looks something like this: When we row reduce this matrix, the reduced row echelon form of will be the same, and we just attach a constant column to the right of it (something like this:) where , , and are just the numbers obtained by applying the elementary row operations to , , and , respectively. But the system is always consistent regardless of these values, since there is no pivot position in the rightmost column. Hence, an arbitrary vector in can be written as a linear combination of the columns of .  Well an arbitrary vector can be any vector in . We essentially just established that every vector can be written as a linear combination of the columns of , and hence the columns of spans .  "
},
{
  "id": "sec15-SolutionSets",
  "level": "1",
  "url": "sec15-SolutionSets.html",
  "type": "Section",
  "number": "1.5",
  "title": "Solution Sets of Linear Systems",
  "body": " Solution Sets of Linear Systems   After we know what an augmented matrix really represents, we will now focus on the solution set of a system of linear equations. Recall back in the beginning of the term, we often just write a solution out. We can actually take an additional step to describe all the solutions.    After this section, students will be able to:     identify a homogeneous system of linear equations.    describe the solution set by identifying the basis vector(s).    describe the solution set of a non-homogeneous system by modifying the solution set of the corresponding homogeneous system.      There are two types of systems of linear equations if we consider the values of the constants terms: homogeneous system and non-homogeneous system . They are of course related and we will focus on the homogeneous systems first, then we will see how to use the results to understand the non-homogeneous systems.   Homogeneous Linear System  Let's start by looking at a quick task! Richard claims that the following system of linear equations has at least one solution (hence a consistent system) at the first glance. Why does Richard know about it quickly?  Recall something is called a solution if it satisfies all the equations in the system! Richard made a keen observation that all equations would work out if the variables are all zero. That is, , , and .  To verify, Richard plugged in zero for every variable. He got zero on the left-hand side of every equation and solve all of them! So is a solution to this system of linear equations.  It turns out that this type of systems of linear equations is called a homogeneous system !    A homogeneous system of equations (or a system of homogeneous equations) is a system of linear equations where all of the constants to the right of the equal sign are zero.    For example, we worked with the following system of linear equations in a previous section: This is NOT a homogeneous system since the constants on the right-hand side are not all zero. We can make it homogeneous by changing the number on the right-hand side of every equation to a zero as follows: Then we have a homogeneous system!   Note: Just to be clear, this is a different system of linear equations. However, we will see later that it is actually related to the original one in an important way later on!  Usually, a system of linear equations can have either (1) zero, (2) one, or (3) infinitely many solutions. But it is impossible for a homogeneous system to have zero solutions! As we figured out the very first question in this section, every homogeneous system has at least the trivial solution (where all the variables are zero). So a homogeneous system either has one solution (trivial) OR it has infinitely many solutions .  Let's solve our homogeneous system! First, we will write the augmented matrix for the system: We can actually do the exact same steps that we did with the non-homogeneous version. The only difference is that the constant column doesn't require any work since all the entries hold steady at zero.  So if we put it into row echelon form, we get: Now we can convert back to a system of linear equations and we get: Just like with the regular version, and are the leading variables and is a free variable. We can back substitute into the first equation to get and write the solution in parametric form: or, using our linear algebra notation of vectors (which means in column vectors), an arbitrary vector in the solution set looks like: .  Now, notice that we can factor out a in the solution and see that the set of solutions is of the form where can be any real number. That means every solution of the system is a multiple of . Alternatively, we can say that every solution is in .  We call this a \" basis \" or \" basic vector\" of the solution set (Actually \"basis\" is much more common, but some textbooks use \"basic\"...).   Pretend that we had a (homogeneous) system of 4 linear equations in 5 variables and we put the augmented matrix into row echelon form and got: The leading variables are , , and , so our free variables are and . That is, we should be able to solve for the other three variables in terms of and .  Let's convert it to a system of linear equations: We know that and we can back substitute into the second equation to get as well.  Back substituting into the first equation, we get Now we can write an arbitrary point in the solution set as Now we can split this up into two vectors, one with only 's and one with only 's: This means that every solution is a linear combination of the \"basic\" solutions and . Hence, the solution set is .  Just to be clear, the two basis vectors and are solutions as well! That is one reason why they called the basic solutions (it explains the \"solution\" part). You can also imagine that we can construct infinitely many solutions using these two vectors as building blocks, so they are the \"basis vectors\" for the solution set!    Solve the following homogeneous system of linear equations and write an arbitrary solution as a linear combination of basic solutions (written as column vectors):    Let's start by writing the augmented matrix for the system: We will solve the system using the Gaussian elimination algorithm.  Step 1: Swap Row 1 and Row 2 so that we get a leading without using any fractions:   Step 2: Add times Row 1 to Row 2 (and replace Row 2), add times Row 1 to Row 3 (and replace Row 3), and add times Row 1 to Row 4 (and replace Row 4) to get:   Step 3: Multiply Row 2, Row 3, and Row 4 by (observe the last three rows are exactly the same!) to get:   Step 4: Add times Row 2 to Row 3 (and replace Row 3) and add times Row 2 to Row 4 (and replace Row 4) to get:   We can see from the leading s that and are the leading variables and and are the free variables. We can also see this from converting back to a system of linear equations: We can solve for in terms of , , and to get: We can also solve for in terms of and to get: Then we can back substitute this expression for into the first equation to get: Now let's write our general solution as a column vector! Every solution looks like    If you want to turn the augmented matrix into reduced row echelon form...  To get the augmented matrix into reduced row echelon form, we will just need to do one more step after Step 4.  Step 5: Add times Row 2 to Row 1 (and replace Row 1) to get:   Converting it back to the system of linear equations, we get: Similarly, we see that and are the free variables, and hence we will represent and in terms of and :   Then we can write our general solution as a column vector! Every solution looks like      Terminology! The way we write an arbitrary solution as a linear combination of basis vectors is called the parametric form of the solution set. If you are instructed to write the solution set in parametric form, you should write it as a linear combination of basis vectors using free variables as parameters.   But Richard... Are there only one set of basis vectors for a solution set?  The short answer is NO! There are many different ways to represent the basis vectors for a solution set. Sometimes we pick \"nice\" basis vectors to make the answer look pretty.  For example, in the checkpoint problem earlier, the solution in parametric form is But the two basis vectors look messy because of the fractions.  We can actually represent these two basis vectors differently. If , then the first basis vector becomes If , then the second basis vector becomes So we can also write the solution, in parametric form, as Look how much nicer this representation of the solution set is!  In the next section, we will talk about a concept called \"independence\". Basically, the idea here is that we swap two messy linearly independent basis vectors for two nice linearly independent vectors that span the same solution set.   Recall the solution set to a homogeneous system can be represented as the span of the basis vectors. We know how spans look like geometrically!   If there are no free variables, then the only solution is the trivial solution, and (just a point).    If there is one free variable, then the solution set is . We saw in the last section that this will be a line through the origin (since must be in the span).    If there are two free variables, then the solution set is . We saw in the last section that this will be a plane through the origin (again, since must be in the span).   And the list goes on if we have more free variables!    Non-Homogeneous Linear System  By contrast, a non-homogeneous system of equations (or a system of non-homogeneous equations) is a system of linear equations where at least one of the constants to the right of the equal sign is NOT zero (so NOT a homogeneous system).  There is a very important relationship between the solution set of a non-homogeneous system and the solution set of the corresponding homogeneous system! Let's revisit a non-homogeneous system we worked with before: Skimming through will help us locate the solution set of this system as Or, putting it in column vector form, we can write an arbitrary solution as Of course, we can do our previous trick of splitting this up into two vectors, one with only 's and one without any 's (so that we can factor out the ): Hmm... Does the first vector(s) look familiar? This is actually the same as the solution set of the corresponding homogeneous system!  One can verify quickly that the second vector , by itself, is also a solution to the non-homogeneous system as well! This is our BIG theorem in this section!    Suppose the equation is consistent for some given , and let be a solution to this equation. Then the solution set of is the set of all vectors of the form , where is a parameter and is a solution to the homogeneous equation .    In general, we can solve a system of linear equations using the Gaussian Elimination algorithm. Assuming the system is consistent, we can write an arbitrary solution in parametric form using the same trick that we have been doing: split up the vector by the variable (or lackof) and factor out the free variable to get a linear combination of the basis vectors of the homogeneous solution set plus a particular solution to the non-homogeneous system.   Describe all the solutions to the Matrix Equation where in parametric form.        We can also think about what it means in terms of geometry! Observe that the homogeneous equation looks a lot like our linear equation (in the sense that they are both linear and the constant term is zero). Then that means the non-homogeneous equation is like the linear equation .  How did we obtain from ? The answer is vertical translation by ! That is, we can think of the solution to the non-homogeneous equation as the solution to the corresponding homogeneous equation shifted a bit by a particular solution to the non-homogeneous equation.  Geometrically, let's think about as a solution to and as a particular solution to . Then we know that is also a solution to ! The diagram below shows the relationship between the two solutions to :    Adding to translates to   In addition, we can grab a vector from the span of and add it to to get another solution to . To keep things simple, let's just imagine there is only one free variable in the homogeneous solution set. That is, the span of is a line through the origin. Then the solution set of is a line parallel to the span of that goes through the particular solution .    Parallel solution sets of and with one free variable   Similarly, if there are two free variables in the homogeneous solution set, then the solution set of is a plane parallel to the span of the two basis vectors that goes through the particular solution . And the list goes on if there are more free variables!    Parallel solution sets of and with two free variables    "
},
{
  "id": "sec15-SolutionSets-2-2",
  "level": "2",
  "url": "sec15-SolutionSets.html#sec15-SolutionSets-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     identify a homogeneous system of linear equations.    describe the solution set by identifying the basis vector(s).    describe the solution set of a non-homogeneous system by modifying the solution set of the corresponding homogeneous system.    "
},
{
  "id": "sec15-SolutionSets-3",
  "level": "2",
  "url": "sec15-SolutionSets.html#sec15-SolutionSets-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous system non-homogeneous system "
},
{
  "id": "subsec-HomogeneousSystem-5",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-HomogeneousSystem-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous system "
},
{
  "id": "def-HomogeneousSystem",
  "level": "2",
  "url": "sec15-SolutionSets.html#def-HomogeneousSystem",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  A homogeneous system of equations (or a system of homogeneous equations) is a system of linear equations where all of the constants to the right of the equal sign are zero.   "
},
{
  "id": "subsec-HomogeneousSystem-9",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-HomogeneousSystem-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trivial solution "
},
{
  "id": "subsec-HomogeneousSystem-13",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-HomogeneousSystem-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basis basic "
},
{
  "id": "subsec-HomogeneousSystem-14",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-HomogeneousSystem-14",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": " Pretend that we had a (homogeneous) system of 4 linear equations in 5 variables and we put the augmented matrix into row echelon form and got: The leading variables are , , and , so our free variables are and . That is, we should be able to solve for the other three variables in terms of and .  Let's convert it to a system of linear equations: We know that and we can back substitute into the second equation to get as well.  Back substituting into the first equation, we get Now we can write an arbitrary point in the solution set as Now we can split this up into two vectors, one with only 's and one with only 's: This means that every solution is a linear combination of the \"basic\" solutions and . Hence, the solution set is .  Just to be clear, the two basis vectors and are solutions as well! That is one reason why they called the basic solutions (it explains the \"solution\" part). You can also imagine that we can construct infinitely many solutions using these two vectors as building blocks, so they are the \"basis vectors\" for the solution set!  "
},
{
  "id": "subsec-HomogeneousSystem-15",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-HomogeneousSystem-15",
  "type": "Checkpoint",
  "number": "1.5.3",
  "title": "",
  "body": " Solve the following homogeneous system of linear equations and write an arbitrary solution as a linear combination of basic solutions (written as column vectors):    Let's start by writing the augmented matrix for the system: We will solve the system using the Gaussian elimination algorithm.  Step 1: Swap Row 1 and Row 2 so that we get a leading without using any fractions:   Step 2: Add times Row 1 to Row 2 (and replace Row 2), add times Row 1 to Row 3 (and replace Row 3), and add times Row 1 to Row 4 (and replace Row 4) to get:   Step 3: Multiply Row 2, Row 3, and Row 4 by (observe the last three rows are exactly the same!) to get:   Step 4: Add times Row 2 to Row 3 (and replace Row 3) and add times Row 2 to Row 4 (and replace Row 4) to get:   We can see from the leading s that and are the leading variables and and are the free variables. We can also see this from converting back to a system of linear equations: We can solve for in terms of , , and to get: We can also solve for in terms of and to get: Then we can back substitute this expression for into the first equation to get: Now let's write our general solution as a column vector! Every solution looks like    If you want to turn the augmented matrix into reduced row echelon form...  To get the augmented matrix into reduced row echelon form, we will just need to do one more step after Step 4.  Step 5: Add times Row 2 to Row 1 (and replace Row 1) to get:   Converting it back to the system of linear equations, we get: Similarly, we see that and are the free variables, and hence we will represent and in terms of and :   Then we can write our general solution as a column vector! Every solution looks like     "
},
{
  "id": "subsec-HomogeneousSystem-16",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-HomogeneousSystem-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric form "
},
{
  "id": "subsec-HomogeneousSystem-17",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-HomogeneousSystem-17",
  "type": "Note",
  "number": "1.5.5",
  "title": "But Richard... Are there only one set of basis vectors for a solution set?",
  "body": " But Richard... Are there only one set of basis vectors for a solution set?  The short answer is NO! There are many different ways to represent the basis vectors for a solution set. Sometimes we pick \"nice\" basis vectors to make the answer look pretty.  For example, in the checkpoint problem earlier, the solution in parametric form is But the two basis vectors look messy because of the fractions.  We can actually represent these two basis vectors differently. If , then the first basis vector becomes If , then the second basis vector becomes So we can also write the solution, in parametric form, as Look how much nicer this representation of the solution set is!  In the next section, we will talk about a concept called \"independence\". Basically, the idea here is that we swap two messy linearly independent basis vectors for two nice linearly independent vectors that span the same solution set.  "
},
{
  "id": "subsec-NonHomogeneousSystem-2",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-NonHomogeneousSystem-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "non-homogeneous system of equations "
},
{
  "id": "thm-HomogeneousSolutionSet",
  "level": "2",
  "url": "sec15-SolutionSets.html#thm-HomogeneousSolutionSet",
  "type": "Theorem",
  "number": "1.5.6",
  "title": "",
  "body": "  Suppose the equation is consistent for some given , and let be a solution to this equation. Then the solution set of is the set of all vectors of the form , where is a parameter and is a solution to the homogeneous equation .   "
},
{
  "id": "subsec-NonHomogeneousSystem-7",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-NonHomogeneousSystem-7",
  "type": "Checkpoint",
  "number": "1.5.7",
  "title": "",
  "body": " Describe all the solutions to the Matrix Equation where in parametric form.       "
},
{
  "id": "subsec-NonHomogeneousSystem-11",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-NonHomogeneousSystem-11",
  "type": "Figure",
  "number": "1.5.8",
  "title": "",
  "body": "  Adding to translates to  "
},
{
  "id": "subsec-NonHomogeneousSystem-13",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-NonHomogeneousSystem-13",
  "type": "Figure",
  "number": "1.5.9",
  "title": "",
  "body": "  Parallel solution sets of and with one free variable  "
},
{
  "id": "subsec-NonHomogeneousSystem-15",
  "level": "2",
  "url": "sec15-SolutionSets.html#subsec-NonHomogeneousSystem-15",
  "type": "Figure",
  "number": "1.5.10",
  "title": "",
  "body": "  Parallel solution sets of and with two free variables  "
},
{
  "id": "sec17-LinearIndependence",
  "level": "1",
  "url": "sec17-LinearIndependence.html",
  "type": "Section",
  "number": "1.6",
  "title": "Linear Independence",
  "body": " Linear Independence   When building a span, are all the vectors actually necessary? Often, a set contains \"redundant\" vectors that can be constructed entirely from the others. In this section, we will formalize this idea through the concepts of linear independence and dependence.    After this section, students will be able to:     define linear independence and dependence in terms of the trivial and nontrivial solutions to a homogeneous vector equation.    determine whether a given set of vectors is linearly independent or dependent.    identify \"redundant\" vectors within a linearly dependent set and express them as a linear combination of the other vectors.        An indexed set of vectors , , is linearly independent if the vector equation has only the trivial solution.  If the trivial solution is not unique, we call the set linear dependent .  That is, if a set , , is linearly dependent, then there exists some scalars , not all zero, such that     But how does the vector equation even related to the idea of independence? We will demonstrate the relation in the following example.   Suppose we have a set of three vectors , where Is this set of vectors linearly independent?  Let's follow the definition! That is, we want to determine if the solution to the following vector equation is unique.  We know how to solve this equation! We will first convert it to an augmented matrix: Now let's row reduce this augmented matrix!   Step 1: Adding times Row 1 to Row 2 (and replacing Row 2), we obtain     Step 2: Adding times Row 1 to Row 3 (and replacing Row 3), we obtain    We immediately know that is a free variable since there is no pivot position in the third column. Hence, this vector equation has infinitely many solutions.  By the definition, we know that is linearly dependent .  But what does it mean? Why do we call these three vectors linearly dependent ? Well let's finish solving this vector equation!  Since is a free variable, then we let , where . Then we obtain Okay. This is a general solution to the vector equation. Recall we can obtain a particular solution by assigning a value to our parameter, .  Let's make . Then our particular solution is Then plugging in the solution to the vector equation will make the equation true. That is, we have the following equation: We can isolate one of the three vectors! Just for demonstration purposes, let's isolate ! Then we have Observe that is a linear combination of and ! That is, is dependent on and .   The practical meaning of a linearly dependent set of vectors is that a vector can be expressed as a linear combination of the other vectors in the set. That is, this vector is dependent of other vectors. This specific relation is called the linear dependence relation .  In the above example, a linear dependence relation is since this relation allows us to express a vector, , as a linear combination of the other vectors, and .   Is the set linearly independent?   Yes, this set of vectors is linearly independent .  To justify this, we set up the homogeneous vector equation:   We can solve this by row reducing the corresponding augmented matrix:   Notice that every column in the coefficient matrix contains a pivot position, which means there are no free variables. Therefore, the vector equation has only the trivial solution ( ). Because no vector can be built from the others, the set is linearly independent.    You may notice that the procedure to determine whether a set of column vectors are linearly independent is essentially the same as row reducing an augmented matrix representing a homogeneous system of linear equations. That is, we are essentially solving the homogeneous matrix equation , where consists of the vectors of interest.   If has only the trivial solution, then the columns of are linearly independent;    If has infinitely many solutions, then the columns of are linearly dependent.      Suppose we are given the coefficient matrix . Observe that consists of three column vectors: Are they linearly independent?  We can answer this question by solving the homogeneous matrix equation . The augmented matrix is Of course we know how to row reduce it! Notice that the constant column of zeros will stay unchanged after all the elementary row operations. So we can only row reduce the coefficient matrix part! Recall the constant column will consist of all zeros.  Observe that every column of the coefficient matrix has a pivot position, which implies that there is no free variable. Then this homogeneous matrix equation has only the trivial solution. That is, the only \"linearly dependent relation\" is Well we can't isolate any of the three vectors since all the above relation tells us is that . Hence, it makes sense to call the vectors making up the columns of  linearly independent , in the sense that none of the vector is dependent of other vectors.   It turns out that there are some special theorems to determine whether a set of vectors are linearly independent. Let's look at the following example and see if we can generalize the theorems!   Is linearly independent?  Think about it first and see if you can figure it out. Then expand the following solution to check your answer!   These two vectors are linearly dependent since there is a way to write a vector as a linear combination of the other vector.  Clearly, . That is, the vector is a linear combination of the vector . So is dependent of .    Using the similar argument, we can make sense of the following theorem:    Consider . If for some nonzero constant , then and are linearly dependent.    Now let's look at the next example! Remember the goal is to generalize it!   Is linearly independent?  Think about it first and see if you can figure it out. Then expand the following solution to check your answer!   These three vectors are linearly dependent since there is a way to write a vector as a linear combination of the other vectors.  Clearly, we can represent the zero vector as a linear combination of the other two vectors with both scalars being zero. That is, Hence, these three vectors are linearly dependent.    Using the similar argument, we can make sense of the following theorem:    Any set containing is linearly dependent.     When is the set of a single vector linearly independent?   A set containing a single vector is linearly independent if and only if .  By definition, we are looking at the vector equation . If is the zero vector, then the scalar can be any real number (yielding infinitely many solutions), making it a dependent set. If is any non-zero vector, the only way for the equation to hold true is if the scalar (the trivial solution), making it an independent set.    Now let's look at the next example! Remember the goal is to generalize it!   Is linearly independent?  Think about it first and see if you can figure it out. Then expand the following solution to check your answer!   These three vectors are linearly dependent since the homogeneous matrix equation is guaranteed to have infinitely many solutions.  Let . What does the (reduced) row echelon look like after row reductions?  Well there are only two row so there can be at most two pivot positions.  Yet there are three variables in this equation since each vector gets a mystery scalars. That is, at least one variable is a free variable, and hence the homogeneous equation must have infinitely many solutions.  Therefore, these three vectors are linearly dependent.    Using the similar argument, we can make sense of the following theorem:    A set of vectors with more vectors than there are entries in those vectors are linearly dependent.    They are the linear dependence tests we can use to quickly determine if a set of vectors is linearly dependent. If you can apply one of the three tests immediately, great! We can conclude that the set is linearly dependent. But the failure to apply any of these tests doesn't mean the set is linearly independent . It just means we will have to go back to the definition to determine it.  Usually, we want more than just knowing that a set is linearly dependent. We want to pick out the \"redundant\" vectors. This brings us to our big theorem for this section!   Characterization of Linearly Dependent Sets   An indexed set , is linearly dependent if and only if at least one vector iin is a linear combination of the others. Moreover, if is linearly dependent and , then some is a linear combination of .     Proof of the big theorem  First, assume some is a linear combination of the other vectors, then where are not all zero.  Then so is linearly dependent.  On the other hand, assume is linearly dependent. If , then it is a trivial linear combination of the other vectors.  Suppose . Then there exist not all zero such that   Let be the largest subscript such that . Since ,    What this theorem says is that a linearly dependent set always have at least one \"redundant\" vector, and we can find such \"redundant\" vectors by going over the list one by one.   Let's revisit the set of three vectors , where We have shown that this is a linearly dependent set.  What the big theorem tells us is that at least one vector in this set is \"redundant\", and we can find this \"redundant\" vector by examining the vectors one by one.  Let's start with . This is not a zero vector, so it won't be a \"redundant\" vector in the set.  Now let's look at ! Obviously, is not a scalar multiple of , so it isn't a \"redundant\" vector.  Now it's ! We know that our linear dependence relation is Then we can express as a linear combination of the other two vectors to show that this is our \"redundant\" vector!   But why do we call \"redundant\"?  That is because we can build the span of the set without the need to include this \"redundant\" vector of . So we have because since it is a linear combination of the other two vectors. Hence, is redundant in the sense that it does not contribute to the span.    Consider the set of five vectors in , , where Describe .   Does the set look linearly dependent? If so, how can we pick out all the \"redundant\" vectors, since they don't contribute to the span.    We can quickly determine that is linearly dependent using some of the linear dependence tests (you can actually apply all three of them!). Let's pick out the \"redundant\" vectors!  Let's start with . Since , then it is not redundant.  Next is . Notice that is the zero vector! We can build it using a scalar of on our previous vector: . Therefore, is our first redundant vector.  Now let's look at . We need to see if is a linear combination of the valid vectors before it (just ). Clearly, there is no scalar such that . So, introduces a new direction. It is not redundant.  Moving on to . Can we build using and ? Yes! Observe that is exactly twice . Since it doesn't give us anything new, is our second redundant vector.  Finally, let's examine . Can we express as a linear combination of our core independent vectors, and ? If we scale by and by , we get: Because can be perfectly constructed from vectors already in our set, is our third redundant vector.  Since , , and are redundant, they do not contribute anything new to the coordinate space. We can build the exact same span using only the linearly independent vectors and .    If you really want to describe this span precisely...  We haven't learned enough to describe this span precisely, especially geometrically. And I don't think we will in this class (so let me know if someone wants to turn this into a class project)!  Long story short, the span is a plane in with the equation of .     "
},
{
  "id": "sec17-LinearIndependence-2-2",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     define linear independence and dependence in terms of the trivial and nontrivial solutions to a homogeneous vector equation.    determine whether a given set of vectors is linearly independent or dependent.    identify \"redundant\" vectors within a linearly dependent set and express them as a linear combination of the other vectors.    "
},
{
  "id": "def-LinearIndependence",
  "level": "2",
  "url": "sec17-LinearIndependence.html#def-LinearIndependence",
  "type": "Definition",
  "number": "1.6.1",
  "title": "",
  "body": "  An indexed set of vectors , , is linearly independent if the vector equation has only the trivial solution.  If the trivial solution is not unique, we call the set linear dependent .  That is, if a set , , is linearly dependent, then there exists some scalars , not all zero, such that    "
},
{
  "id": "sec17-LinearIndependence-5",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-5",
  "type": "Example",
  "number": "1.6.2",
  "title": "",
  "body": " Suppose we have a set of three vectors , where Is this set of vectors linearly independent?  Let's follow the definition! That is, we want to determine if the solution to the following vector equation is unique.  We know how to solve this equation! We will first convert it to an augmented matrix: Now let's row reduce this augmented matrix!   Step 1: Adding times Row 1 to Row 2 (and replacing Row 2), we obtain     Step 2: Adding times Row 1 to Row 3 (and replacing Row 3), we obtain    We immediately know that is a free variable since there is no pivot position in the third column. Hence, this vector equation has infinitely many solutions.  By the definition, we know that is linearly dependent .  But what does it mean? Why do we call these three vectors linearly dependent ? Well let's finish solving this vector equation!  Since is a free variable, then we let , where . Then we obtain Okay. This is a general solution to the vector equation. Recall we can obtain a particular solution by assigning a value to our parameter, .  Let's make . Then our particular solution is Then plugging in the solution to the vector equation will make the equation true. That is, we have the following equation: We can isolate one of the three vectors! Just for demonstration purposes, let's isolate ! Then we have Observe that is a linear combination of and ! That is, is dependent on and .  "
},
{
  "id": "sec17-LinearIndependence-6",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear dependence relation "
},
{
  "id": "sec17-LinearIndependence-8",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-8",
  "type": "Checkpoint",
  "number": "1.6.3",
  "title": "",
  "body": " Is the set linearly independent?   Yes, this set of vectors is linearly independent .  To justify this, we set up the homogeneous vector equation:   We can solve this by row reducing the corresponding augmented matrix:   Notice that every column in the coefficient matrix contains a pivot position, which means there are no free variables. Therefore, the vector equation has only the trivial solution ( ). Because no vector can be built from the others, the set is linearly independent.   "
},
{
  "id": "sec17-LinearIndependence-10",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-10",
  "type": "Example",
  "number": "1.6.4",
  "title": "",
  "body": " Suppose we are given the coefficient matrix . Observe that consists of three column vectors: Are they linearly independent?  We can answer this question by solving the homogeneous matrix equation . The augmented matrix is Of course we know how to row reduce it! Notice that the constant column of zeros will stay unchanged after all the elementary row operations. So we can only row reduce the coefficient matrix part! Recall the constant column will consist of all zeros.  Observe that every column of the coefficient matrix has a pivot position, which implies that there is no free variable. Then this homogeneous matrix equation has only the trivial solution. That is, the only \"linearly dependent relation\" is Well we can't isolate any of the three vectors since all the above relation tells us is that . Hence, it makes sense to call the vectors making up the columns of  linearly independent , in the sense that none of the vector is dependent of other vectors.  "
},
{
  "id": "sec17-LinearIndependence-12",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-12",
  "type": "Example",
  "number": "1.6.5",
  "title": "",
  "body": " Is linearly independent?  Think about it first and see if you can figure it out. Then expand the following solution to check your answer!   These two vectors are linearly dependent since there is a way to write a vector as a linear combination of the other vector.  Clearly, . That is, the vector is a linear combination of the vector . So is dependent of .   "
},
{
  "id": "thm-LinearlyDependent-SetTwoVectors",
  "level": "2",
  "url": "sec17-LinearIndependence.html#thm-LinearlyDependent-SetTwoVectors",
  "type": "Theorem",
  "number": "1.6.6",
  "title": "",
  "body": "  Consider . If for some nonzero constant , then and are linearly dependent.   "
},
{
  "id": "sec17-LinearIndependence-16",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-16",
  "type": "Example",
  "number": "1.6.7",
  "title": "",
  "body": " Is linearly independent?  Think about it first and see if you can figure it out. Then expand the following solution to check your answer!   These three vectors are linearly dependent since there is a way to write a vector as a linear combination of the other vectors.  Clearly, we can represent the zero vector as a linear combination of the other two vectors with both scalars being zero. That is, Hence, these three vectors are linearly dependent.   "
},
{
  "id": "thm-LinearDependence-ZeroVector",
  "level": "2",
  "url": "sec17-LinearIndependence.html#thm-LinearDependence-ZeroVector",
  "type": "Theorem",
  "number": "1.6.8",
  "title": "",
  "body": "  Any set containing is linearly dependent.   "
},
{
  "id": "sec17-LinearIndependence-19",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-19",
  "type": "Checkpoint",
  "number": "1.6.9",
  "title": "",
  "body": " When is the set of a single vector linearly independent?   A set containing a single vector is linearly independent if and only if .  By definition, we are looking at the vector equation . If is the zero vector, then the scalar can be any real number (yielding infinitely many solutions), making it a dependent set. If is any non-zero vector, the only way for the equation to hold true is if the scalar (the trivial solution), making it an independent set.   "
},
{
  "id": "sec17-LinearIndependence-21",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-21",
  "type": "Example",
  "number": "1.6.10",
  "title": "",
  "body": " Is linearly independent?  Think about it first and see if you can figure it out. Then expand the following solution to check your answer!   These three vectors are linearly dependent since the homogeneous matrix equation is guaranteed to have infinitely many solutions.  Let . What does the (reduced) row echelon look like after row reductions?  Well there are only two row so there can be at most two pivot positions.  Yet there are three variables in this equation since each vector gets a mystery scalars. That is, at least one variable is a free variable, and hence the homogeneous equation must have infinitely many solutions.  Therefore, these three vectors are linearly dependent.   "
},
{
  "id": "thm-LinearDependence-MoreVectors",
  "level": "2",
  "url": "sec17-LinearIndependence.html#thm-LinearDependence-MoreVectors",
  "type": "Theorem",
  "number": "1.6.11",
  "title": "",
  "body": "  A set of vectors with more vectors than there are entries in those vectors are linearly dependent.   "
},
{
  "id": "thm-CharacterizationLinearlyDependentSets",
  "level": "2",
  "url": "sec17-LinearIndependence.html#thm-CharacterizationLinearlyDependentSets",
  "type": "Theorem",
  "number": "1.6.12",
  "title": "Characterization of Linearly Dependent Sets.",
  "body": " Characterization of Linearly Dependent Sets   An indexed set , is linearly dependent if and only if at least one vector iin is a linear combination of the others. Moreover, if is linearly dependent and , then some is a linear combination of .   "
},
{
  "id": "sec17-LinearIndependence-27",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-27",
  "type": "Proof",
  "number": "1.6.1",
  "title": "Proof of the big theorem.",
  "body": " Proof of the big theorem  First, assume some is a linear combination of the other vectors, then where are not all zero.  Then so is linearly dependent.  On the other hand, assume is linearly dependent. If , then it is a trivial linear combination of the other vectors.  Suppose . Then there exist not all zero such that   Let be the largest subscript such that . Since ,   "
},
{
  "id": "sec17-LinearIndependence-29",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-29",
  "type": "Example",
  "number": "1.6.13",
  "title": "",
  "body": " Let's revisit the set of three vectors , where We have shown that this is a linearly dependent set.  What the big theorem tells us is that at least one vector in this set is \"redundant\", and we can find this \"redundant\" vector by examining the vectors one by one.  Let's start with . This is not a zero vector, so it won't be a \"redundant\" vector in the set.  Now let's look at ! Obviously, is not a scalar multiple of , so it isn't a \"redundant\" vector.  Now it's ! We know that our linear dependence relation is Then we can express as a linear combination of the other two vectors to show that this is our \"redundant\" vector!   But why do we call \"redundant\"?  That is because we can build the span of the set without the need to include this \"redundant\" vector of . So we have because since it is a linear combination of the other two vectors. Hence, is redundant in the sense that it does not contribute to the span.  "
},
{
  "id": "sec17-LinearIndependence-30",
  "level": "2",
  "url": "sec17-LinearIndependence.html#sec17-LinearIndependence-30",
  "type": "Checkpoint",
  "number": "1.6.14",
  "title": "",
  "body": " Consider the set of five vectors in , , where Describe .   Does the set look linearly dependent? If so, how can we pick out all the \"redundant\" vectors, since they don't contribute to the span.    We can quickly determine that is linearly dependent using some of the linear dependence tests (you can actually apply all three of them!). Let's pick out the \"redundant\" vectors!  Let's start with . Since , then it is not redundant.  Next is . Notice that is the zero vector! We can build it using a scalar of on our previous vector: . Therefore, is our first redundant vector.  Now let's look at . We need to see if is a linear combination of the valid vectors before it (just ). Clearly, there is no scalar such that . So, introduces a new direction. It is not redundant.  Moving on to . Can we build using and ? Yes! Observe that is exactly twice . Since it doesn't give us anything new, is our second redundant vector.  Finally, let's examine . Can we express as a linear combination of our core independent vectors, and ? If we scale by and by , we get: Because can be perfectly constructed from vectors already in our set, is our third redundant vector.  Since , , and are redundant, they do not contribute anything new to the coordinate space. We can build the exact same span using only the linearly independent vectors and .    If you really want to describe this span precisely...  We haven't learned enough to describe this span precisely, especially geometrically. And I don't think we will in this class (so let me know if someone wants to turn this into a class project)!  Long story short, the span is a plane in with the equation of .    "
},
{
  "id": "sec18-IntroLinearTransformations",
  "level": "1",
  "url": "sec18-IntroLinearTransformations.html",
  "type": "Section",
  "number": "1.7",
  "title": "Introduction to Linear Transformations",
  "body": " Introduction to Linear Transformations   Up to this point, we have largely viewed matrix equations and matrix-vector multiplication through an algebraic and numerical lens. In this section, we shift our perspective to explore the graphical and geometric representations of these operations.  We will introduce the concept of a linear transformation, which allows us to think of matrices as dynamic functions that map vectors from one space to another.    After this section, students will be able to:     verify whether a given mapping satisfies the properties of a linear transformation.    evaluate the image of a linear transformation and solve the pre-image of a linear transformation.    evaluate linear transformations using the principles of linearity and linear combinations.       Transformations are pretty much the same thing as functions you have learned in the past. Given that we are in MTH 261 linear algebra, the things we care about are vectors. Hence, a transformation in linear algebra is a function that takes vectors from one place and assign it to other vectors in another place.    A linear transformation from to via Matrix Multiplication   Recall we learned that functions have three components: domain, range, and the rule. Similarly, transformations also have these three components. In addition, we will define a new concept (related to the range of a function), called the codomain .  Formally speaking, the codomain of a linear transformation is the set that includes all the possible values of a given transformation, which are called images . While this definition sounds a lot like the range of a function, there is a key difference: not everything in the codomain needs to be an image of the transformation , while everything in the range has to be some images from the transformation. Immediately, we can see that codomain should be a larger set that capture the range.    Domain, Codomain, and Range of the Linear Transformation    But Richard... Why bother defining this special set of codomain?  This is because in practice, we want a place to capture all the images but doesn't necessarily need to know what the range is.  Here is a quick example: consider the function . We all know that the domain is and the range is instantly because we know that all number squared cannot be negative. Then we don't need to define its codomain, another set to tell us where all possible outputs are going to live.  But what if my function is more complicated, like .  Of course, the domain remains to be but we can't quickly identify the range... All we knew, by just skimming through the function, is that outputs should also be in . Yet we can't say that all real numbers can be an output. Hence, rather than calling the range (which is not true), we say that is the codomain.   It is totally possible for a function to have the codomain exactly the same as the range! This type of functions are called surjection (or onto transformation).   The word \"linear\" means that the transformation must satisfy some special property. This special property is called the linearity , captured in the following definition.    If is a function with the following two properties:   For any scalar and any vector ,     For any two vectors ,    then is a linear transformation .    The two properties in the definition are called the linearity . Of course, it makes sense to call a transformation \"linear\" if the linearity property is satisfied.   Note: Sometimes these two properties are combined to form one rule that looks like this: This basically tells us that we can figure out the output for a linear combination of vectors by taking the same linear combination of the outputs of those vectors.   Determine if the following transformations are linear transformation.    defined by      defined by      defined by      defined by           No. It fails the scalar multiplication property. For instance, let and . However, Since , it is not linear.     Yes. Let's verify both properties. First, for any scalar : Second, for vector addition:      No. It fails vector addition. Let and . But evaluating them separately gives:      Yes. Similar to part (b), we test the properties. For scalar multiplication: For vector addition:         What are some linear transformations you have learned in the past?  What are some non-linear transformations you have learned in the past?   Just some more examples of linear and non-linear transformation   Linear Transformations:   Proportional relationships like .  Taking the derivative of a function (Calculus!). The derivative of a sum is the sum of the derivatives, and constants pull out to the front.  Evaluating definite integrals.     Non-linear Transformations:   Quadratic functions like .  Exponential functions like .  Absolute value functions like .  Functions in the form where . This is a huge trap! In high school algebra, we call these \"linear equations,\" but in linear algebra, they do NOT pass the test for linear transformations because . We actually call these affine transformations.      It turns out that every matrix defines a linear transformation in a way that In the next chapter, we will learn about matrix operations. Just a preview, by the Matrix Multiplication rules, we know that            Hence, we have the linearity in the definition of linear transformations.   A non-example  The function given by is NOT a linear transformation.   Proof: Notice that If this were a linear transformation, then property (ii) would mean that But in fact, Oopsie!    An example  The function given by IS indeed a linear transformation!   Proof: We will verify the two properties in the definition of linear transformations.   Suppose is a scalar and is a vector in . Then     Suppose and are two vectors in . Then    Since both properties hold, we can conclude that IS indeed a linear transformation!   Note: In this example, observe that the coefficients do not contribute to the proof at all (so the proof would work exactly the same even if we had different coefficients). Using the same proof, we can show that the function given by is a linear transformation for any choice of scalars .   Using linearity, we can quickly obtain the following theorem:    If is a linear transformation, then      Very quick proof of this theorem      This is an important observation later when we investigate the idea of subspaces (spoiler: the kernel is a subspace and one of the reasons is because of this!)  The linearity property of linear transformations makes it possible to \"plug in\" a vector even if we don't know the rule. That is, we can evaluate linear transformations using linear combinations .   Suppose is a linear transformation (but we don't know the rule) and we do know that Let's say we want to evaluate .   How do we do that?   Notice that So property (i) and (ii) of linear transformations tell us that    This is a very important kind of problem! Not only does it show up on exams commonly, it will also be the key to finding the matrix for a linear transformation which is one of the most important things in linear algebra!   Suppose is a linear transformation and we know that Find .   First, we need to express as a linear combination of the two input vectors we know. We are looking for scalars and such that:   Looking at the third row, we immediately see that , which means .  Substituting into the second row gives us , which means . Let's quickly verify with the first row: . It works!  Now we can use the linearity properties to evaluate the transformation:     What about the other way around? What if we are given the image of some linear transformation and we are trying to find the input?  Then instead of \"evaluating\", we will be \"solving\" the matrix equation. We are all experts in row reduction so this shouldn't be a problem!   Let . We define by . Now we want to find such that .  If we plug in everything we know into the transformation, then we will get the following matrix equation: Converting this into an augmented matrix, we obtain   Let's apply our Gaussian Elimination skills to solve for :   Translating the reduced row echelon form back into an equation, we get and . Therefore, the input vector we were looking for is:    "
},
{
  "id": "sec18-IntroLinearTransformations-2-3",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     verify whether a given mapping satisfies the properties of a linear transformation.    evaluate the image of a linear transformation and solve the pre-image of a linear transformation.    evaluate linear transformations using the principles of linearity and linear combinations.    "
},
{
  "id": "sec18-IntroLinearTransformations-3",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transformations "
},
{
  "id": "sec18-IntroLinearTransformations-4",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-4",
  "type": "Figure",
  "number": "1.7.1",
  "title": "",
  "body": "  A linear transformation from to via Matrix Multiplication  "
},
{
  "id": "sec18-IntroLinearTransformations-6",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "codomain images "
},
{
  "id": "sec18-IntroLinearTransformations-7",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-7",
  "type": "Figure",
  "number": "1.7.2",
  "title": "",
  "body": "  Domain, Codomain, and Range of the Linear Transformation  "
},
{
  "id": "sec18-IntroLinearTransformations-8",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-8",
  "type": "Note",
  "number": "1.7.3",
  "title": "But Richard... Why bother defining this special set of codomain?",
  "body": " But Richard... Why bother defining this special set of codomain?  This is because in practice, we want a place to capture all the images but doesn't necessarily need to know what the range is.  Here is a quick example: consider the function . We all know that the domain is and the range is instantly because we know that all number squared cannot be negative. Then we don't need to define its codomain, another set to tell us where all possible outputs are going to live.  But what if my function is more complicated, like .  Of course, the domain remains to be but we can't quickly identify the range... All we knew, by just skimming through the function, is that outputs should also be in . Yet we can't say that all real numbers can be an output. Hence, rather than calling the range (which is not true), we say that is the codomain.   It is totally possible for a function to have the codomain exactly the same as the range! This type of functions are called surjection (or onto transformation).  "
},
{
  "id": "def-LinearTransformation-Operator",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#def-LinearTransformation-Operator",
  "type": "Definition",
  "number": "1.7.4",
  "title": "",
  "body": "  If is a function with the following two properties:   For any scalar and any vector ,     For any two vectors ,    then is a linear transformation .   "
},
{
  "id": "sec18-IntroLinearTransformations-11",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearity "
},
{
  "id": "sec18-IntroLinearTransformations-13",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-13",
  "type": "Example",
  "number": "1.7.5",
  "title": "",
  "body": " Determine if the following transformations are linear transformation.    defined by      defined by      defined by      defined by           No. It fails the scalar multiplication property. For instance, let and . However, Since , it is not linear.     Yes. Let's verify both properties. First, for any scalar : Second, for vector addition:      No. It fails vector addition. Let and . But evaluating them separately gives:      Yes. Similar to part (b), we test the properties. For scalar multiplication: For vector addition:       "
},
{
  "id": "sec18-IntroLinearTransformations-14",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-14",
  "type": "Checkpoint",
  "number": "1.7.6",
  "title": "",
  "body": " What are some linear transformations you have learned in the past?  What are some non-linear transformations you have learned in the past?   Just some more examples of linear and non-linear transformation   Linear Transformations:   Proportional relationships like .  Taking the derivative of a function (Calculus!). The derivative of a sum is the sum of the derivatives, and constants pull out to the front.  Evaluating definite integrals.     Non-linear Transformations:   Quadratic functions like .  Exponential functions like .  Absolute value functions like .  Functions in the form where . This is a huge trap! In high school algebra, we call these \"linear equations,\" but in linear algebra, they do NOT pass the test for linear transformations because . We actually call these affine transformations.     "
},
{
  "id": "sec18-IntroLinearTransformations-16",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-16",
  "type": "Example",
  "number": "1.7.7",
  "title": "A non-example.",
  "body": " A non-example  The function given by is NOT a linear transformation.   Proof: Notice that If this were a linear transformation, then property (ii) would mean that But in fact, Oopsie!  "
},
{
  "id": "sec18-IntroLinearTransformations-17",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-17",
  "type": "Example",
  "number": "1.7.8",
  "title": "An example.",
  "body": " An example  The function given by IS indeed a linear transformation!   Proof: We will verify the two properties in the definition of linear transformations.   Suppose is a scalar and is a vector in . Then     Suppose and are two vectors in . Then    Since both properties hold, we can conclude that IS indeed a linear transformation!   Note: In this example, observe that the coefficients do not contribute to the proof at all (so the proof would work exactly the same even if we had different coefficients). Using the same proof, we can show that the function given by is a linear transformation for any choice of scalars .  "
},
{
  "id": "thm-LinearTransformation-Zero",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#thm-LinearTransformation-Zero",
  "type": "Theorem",
  "number": "1.7.9",
  "title": "",
  "body": "  If is a linear transformation, then    "
},
{
  "id": "sec18-IntroLinearTransformations-20",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-20",
  "type": "Proof",
  "number": "1.7.1",
  "title": "Very quick proof of this theorem.",
  "body": " Very quick proof of this theorem     "
},
{
  "id": "sec18-IntroLinearTransformations-23",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-23",
  "type": "Example",
  "number": "1.7.10",
  "title": "",
  "body": " Suppose is a linear transformation (but we don't know the rule) and we do know that Let's say we want to evaluate .   How do we do that?   Notice that So property (i) and (ii) of linear transformations tell us that   "
},
{
  "id": "sec18-IntroLinearTransformations-25",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-25",
  "type": "Checkpoint",
  "number": "1.7.11",
  "title": "",
  "body": " Suppose is a linear transformation and we know that Find .   First, we need to express as a linear combination of the two input vectors we know. We are looking for scalars and such that:   Looking at the third row, we immediately see that , which means .  Substituting into the second row gives us , which means . Let's quickly verify with the first row: . It works!  Now we can use the linearity properties to evaluate the transformation:    "
},
{
  "id": "sec18-IntroLinearTransformations-28",
  "level": "2",
  "url": "sec18-IntroLinearTransformations.html#sec18-IntroLinearTransformations-28",
  "type": "Example",
  "number": "1.7.12",
  "title": "",
  "body": " Let . We define by . Now we want to find such that .  If we plug in everything we know into the transformation, then we will get the following matrix equation: Converting this into an augmented matrix, we obtain   Let's apply our Gaussian Elimination skills to solve for :   Translating the reduced row echelon form back into an equation, we get and . Therefore, the input vector we were looking for is:   "
},
{
  "id": "sec19-MatrixLinearTransformation",
  "level": "1",
  "url": "sec19-MatrixLinearTransformation.html",
  "type": "Section",
  "number": "1.8",
  "title": "The Matrix of a Linear Transformation",
  "body": " The Matrix of a Linear Transformation   So far, we have explored linear transformations by observing how they map inputs to outputs using the properties of linearity. While doing this step-by-step gives us a great feel for the mechanics, it would be highly efficient to capture the entire behavior of a transformation within a single, organized structure.  In this section, we will bridge the gap between abstract mappings and concrete computations. By noticing patterns in how transformations affect our simplest structural building blocks—the standard basis vectors—we will learn how to construct a standard matrix for any linear transformation. We will also use structural reasoning to translate geometric actions, like rotations and reflections, directly into matrix form, and determine if a transformation is an injection or surjection simply by analyzing the columns of its matrix.     construct the standard matrix for a linear transformation.    connect geometric actions to their corresponding matrix representations.    determine if a linear transformation is injective (one-to-one) or surjective (onto).       To find the Standard Matrix...  In the previous section, we left with an example where we find the image of the linear transformation using the linearity property without knowing the matrix. But it would be so nice to actually know the special matrix that defines the transformation. In this section, we will figure out a method to find this matrix.  Notice that any vector in can be written as a linear combination of and .   Quick proof of this claim  Let be an arbitrary vector in . Then Proved!    is called the standard basis of .  For , the standard basis consists of the vectors where the -th entry of is a and all of the rest are zeros. Clearly these are all -dimensional vectors. That means the is actually a different vector depending on which you are working with.  For example, in is , but in is . They are NOT the same vectors!  Combining this fact with the two properties that every linear transformation satisfies, we can see that every linear combination defined on (this works for as well, but let's start small!) is actually determined by what it does to the standard basis vectors and .   Quick proof of this claim  Let be a vector in . Then there exist scalars such that Then for any linear transformation defined on , we have So the output of at is completely determined by the output of at and .   We can use this fact to figure out how to find the matrix for a linear transformation (and in doing so, we really prove that such a matrix will always exist for any linear transformation)!   Suppose that is a linear transformation such that What is the matrix such that for all ?  Consider any vector in . We know that Notice that the output is what we would get if we multiplied the matrix by the vector ! So We found the matrix that goes with this linear transformation!   Notice that in the above example, the columns of our matrix were the outputs of the standard basis vectors . That tells us exactly how to find a matrix for any linear transformation!  Suppose is a linear transformation. To find the matrix such that is given by the rule , we...   Figure out     Write the matrix that has columns :     Pat yourself on the back   Special terminology! This matrix that we found is called the standard matrix for the linear transformation . We can find the standard matrix by figuring out where the transformation takes the standard basis vectors to.   Let be a linear transformation given by Let's find the matrix such that for all .  Step 1: In this case, and . So   Step 2:   Let's check to see if really works! Woo!    Find the matrix that corresponds to the linear transformation given by    Step 1: In this case, since the domain is , our standard basis vectors are , , and . Evaluating the transformation at each gives:     Step 2: We form the matrix by placing these resulting vectors into the columns.   Let's check to see if really works! Yay!      Transformation... What are we transforming?  Have you wondered why we call the linear transformation rather than just using the term \"function\" that we are more familiar with... Well for starter, \"linear function\" is not quite the same as linear transformation. Linear function is defined as but this isn't a linear transformation if is not . So using the term linear function in linear algebra may introduce ambiguity.  Moreover, each linear transformation can be interpreted as some sort of transformation in our usual geometry sense. So the term \"transformation\" here really means we are transforming some sort of objects. Let's start by looking at an example!   Suppose that and we define the linear transformation by . So maps points on the plane to points on the plane.  Let's figure out what this transformation does geometrically by doing the following:   Draw a rectangle centered at and label the four vertices. This is your \"before\" picture.    Plug in each of the four vertices using the rule (write the points as column vectors and multiply!)    Plot the four outputs and connect the dots.    Describe what happened to your rectangle.      I will start with a rectangle with vertices , , , and   First, let's connect the dots to draw our rectangle. This is our \"before\" picture.   Plugging in each of the vertices to our transformation, we get Let's graph the outputs and connect the dots. This is our \"after\" picture.   So what does the transformation do? It is a flip (across the line ) and a stretch (by a factor of )!    Your textbook includes the standard matrices for each type of transformation (page 102-104). For the completeness of this awesome notes, let's include them below as well:    Standard Matrices for Reflections     Standard Matrices for Contractions and Expansions     Standard Matrices for Shears     Standard Matrices for Projection   You may want to do a series of transformations (e.g., expand the object and flip it over). This can be achieved by composing multiple transformations . Matrix-wise, composing transformations means multiplying the corresponding standard matrix to the left . We will not be diving into composition in this class so feel free to explore more (and you may turn this into the class project if interest!).  There is one more type of the transformation that these tables did not include. That is the rotation . We can also do rotation using a linear transformation!   Let's find the standard matrix for a rotation in ! We need to figure out what such a rotation does to the vectors and .  Let's suppose that the vector is the result of rotating counterclockwise by the angle . This vector can be represented as an arrow starting at the origin and ending at the point . We can draw a triangle to figure out the exact coordinates of the vector .   The -coordinate will be and the -coordinate will be . So the rotation takes to .  If we also draw the vector and rotate it (counterclockwise) by an angle of , we get a picture like this:   This time, the -coordinate will be and the -coordinate will be . So the rotation takes to .   Note: These pictures make it easy to see this is true when is between and , To see that this is true regardless of how big is, you can either look at cases in all of the four quadrants or you can use trig identities.  This means that you can find any rotation matrix by plugging into   Using this idea, we can figure out the standard matrices for more transformations! For example, you may be wondering how to reflect the object across an arbitrary line than the ones stated in the tables. Next, let's find a matrix for the reflection across the line ! That is, we need fo figure out what happens to and when we reflect them across the line .  From analytic geometry, we know that the slope of any line perpendicular to will have slope . We want to find the line through that has slope . That is because we need to find the intersection of that line with to get the midpoint of the segment between and the point we get after reflecting .   That perpendicular line is given by , which simplifies to .  Now let's find the point of intersection! Substituting into this equation, we get This means that . Then substituting again, we get . So the midpoint between and the result of reflecting across the line is .  The midpoint formula tells us that the midpoint of a segment between points and is . So where is the point we are looking for. This gives us the equations Solving these equations, we get So the reflection takes to .  A similar method can be used to find out that the reflection takes the point to the point .  Converting these to column vectors, the matrix for reflecting across the line is given by Pulling out the common factor, we can rewrite this as     Special Types of Linear Transformations  There are some special linear transformations, and we will focus on surjection and injection :    A mapping is a surjection (or onto  ) if each is the image of at least one .  That is, every element in the codomain of is an image of the mapping.      A mapping is an injection (or one-to-one ) if each is the image of at most one .  That is, a mapping is injective if implies .    Notice how parallel each of these definitions is. Moreover, these definitions have everything to do with the existence and uniqueness of pre-images:    Existence: Does each have a pre-image? If is surjective, then Yes.     Uniqueness: Is each solution to unique? If is injective, then Yes!     An immediate (and famous) result about injection is the following theorem:    Let be a linear transformation. Then is injective if and only if has only the trivial solution.     This is a biconditional statement. Proving this statement comes in to parts:   Forward direction ( ): Assume that is injective. We want to show that the equation has only the trivial solution.  Because is a linear transformation, we know that it maps the zero vector to the zero vector, meaning . Suppose there is some vector in such that . Then we have: Since we assumed is injective, the outputs being equal guarantees that the inputs must also be equal. Therefore, . This shows that the trivial solution is the only solution.   Backward direction ( ): Assume that has only the trivial solution. We want to show that is injective.  Suppose there are vectors and in such that . Subtracting from both sides, we have By the linearity properties, this implies that By our initial assumption, the only vector that maps to the zero vector is the zero vector itself. This forces the input to be zero. That is, This shows that , and hence is injective.  What we have established that these two claims are either both true or both false (we assume one of them is true, and show the other one is also true). Another way of calling biconditional statements are equivalence statement.   Last but not least, let's make a connection between these two types of the special transformations and what we have learned in the past through the following two statements!    Let be a linear transformation with standard matrix . Then is surjective if and only if the columns of span the codomain, .     Observe that the theorem is a biconditional statement. But instead of proving both directions, let's do a slick trick!  Notation clarification! The symbol means implication!  Let's consider the forward direction. The chain of implication looks like this: Okay. And this is supposed to be impressive how?  Observe that the statements here are all equivalent! That is, to prove the other direction, we can just reverse all the implication arrows and the argument stays true! So the proof of this theorem is to change all the implication arrow to a biconditional arrow!      Let be a linear transformation with standard matrix . Then is injective if and only if the columns of are linearly independent.     We can prove this theorem using the same slick trick!     Let defined by Is a linear transformation? Is it injective? Is it surjective?  First, we determine if is a linear transformation. We can \"factor out\" the variables to rewrite the transformation as a matrix-vector product: Let be this matrix. Because , it is a matrix transformation. Every matrix transformation is a linear transformation, so yes, is a linear transformation.  Next, we check if is injective. By our previous theorem, is injective if and only if the homogeneous equation has only the trivial solution. To determine this, we find the reduced row echelon form of the standard matrix : Because there is a pivot in every column, there are no free variables. The equation has only the trivial solution, . Therefore, is injective.  Finally, we determine if is surjective. The transformation is surjective if and only if its columns span the codomain, . This occurs if and only if there is a pivot position in every row of . Looking at the reduced row echelon form of , the third row does not contain a pivot. Consequently, the columns of do not span , meaning there are vectors in the codomain that cannot be reached. Thus, is not surjective.    "
},
{
  "id": "sec19-MatrixLinearTransformation-2-2",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#sec19-MatrixLinearTransformation-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard matrix "
},
{
  "id": "sec19-MatrixLinearTransformation-2-3",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#sec19-MatrixLinearTransformation-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   construct the standard matrix for a linear transformation.    connect geometric actions to their corresponding matrix representations.    determine if a linear transformation is injective (one-to-one) or surjective (onto).    "
},
{
  "id": "subsec-FindingStandardMatrices-4",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-FindingStandardMatrices-4",
  "type": "Proof",
  "number": "1",
  "title": "Quick proof of this claim.",
  "body": " Quick proof of this claim  Let be an arbitrary vector in . Then Proved!  "
},
{
  "id": "subsec-FindingStandardMatrices-5",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-FindingStandardMatrices-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard basis "
},
{
  "id": "subsec-FindingStandardMatrices-9",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-FindingStandardMatrices-9",
  "type": "Proof",
  "number": "2",
  "title": "Quick proof of this claim.",
  "body": " Quick proof of this claim  Let be a vector in . Then there exist scalars such that Then for any linear transformation defined on , we have So the output of at is completely determined by the output of at and .  "
},
{
  "id": "subsec-FindingStandardMatrices-11",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-FindingStandardMatrices-11",
  "type": "Example",
  "number": "1.8.1",
  "title": "",
  "body": " Suppose that is a linear transformation such that What is the matrix such that for all ?  Consider any vector in . We know that Notice that the output is what we would get if we multiplied the matrix by the vector ! So We found the matrix that goes with this linear transformation!  "
},
{
  "id": "subsec-FindingStandardMatrices-13",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-FindingStandardMatrices-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard matrix "
},
{
  "id": "subsec-FindingStandardMatrices-14",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-FindingStandardMatrices-14",
  "type": "Example",
  "number": "1.8.2",
  "title": "",
  "body": " Let be a linear transformation given by Let's find the matrix such that for all .  Step 1: In this case, and . So   Step 2:   Let's check to see if really works! Woo!  "
},
{
  "id": "subsec-FindingStandardMatrices-15",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-FindingStandardMatrices-15",
  "type": "Checkpoint",
  "number": "1.8.3",
  "title": "",
  "body": " Find the matrix that corresponds to the linear transformation given by    Step 1: In this case, since the domain is , our standard basis vectors are , , and . Evaluating the transformation at each gives:     Step 2: We form the matrix by placing these resulting vectors into the columns.   Let's check to see if really works! Yay!   "
},
{
  "id": "subsec-TransformationGeometry-4",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-TransformationGeometry-4",
  "type": "Example",
  "number": "1.8.4",
  "title": "",
  "body": " Suppose that and we define the linear transformation by . So maps points on the plane to points on the plane.  Let's figure out what this transformation does geometrically by doing the following:   Draw a rectangle centered at and label the four vertices. This is your \"before\" picture.    Plug in each of the four vertices using the rule (write the points as column vectors and multiply!)    Plot the four outputs and connect the dots.    Describe what happened to your rectangle.      I will start with a rectangle with vertices , , , and   First, let's connect the dots to draw our rectangle. This is our \"before\" picture.   Plugging in each of the vertices to our transformation, we get Let's graph the outputs and connect the dots. This is our \"after\" picture.   So what does the transformation do? It is a flip (across the line ) and a stretch (by a factor of )!   "
},
{
  "id": "subsec-TransformationGeometry-6",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-TransformationGeometry-6",
  "type": "Figure",
  "number": "1.8.5",
  "title": "",
  "body": "  Standard Matrices for Reflections  "
},
{
  "id": "subsec-TransformationGeometry-7",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-TransformationGeometry-7",
  "type": "Figure",
  "number": "1.8.6",
  "title": "",
  "body": "  Standard Matrices for Contractions and Expansions  "
},
{
  "id": "subsec-TransformationGeometry-8",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-TransformationGeometry-8",
  "type": "Figure",
  "number": "1.8.7",
  "title": "",
  "body": "  Standard Matrices for Shears  "
},
{
  "id": "subsec-TransformationGeometry-9",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-TransformationGeometry-9",
  "type": "Figure",
  "number": "1.8.8",
  "title": "",
  "body": "  Standard Matrices for Projection  "
},
{
  "id": "def-SurjectiveTransformation",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#def-SurjectiveTransformation",
  "type": "Definition",
  "number": "1.8.9",
  "title": "",
  "body": "  A mapping is a surjection (or onto  ) if each is the image of at least one .  That is, every element in the codomain of is an image of the mapping.   "
},
{
  "id": "def-InjectiveTransformation",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#def-InjectiveTransformation",
  "type": "Definition",
  "number": "1.8.10",
  "title": "",
  "body": "  A mapping is an injection (or one-to-one ) if each is the image of at most one .  That is, a mapping is injective if implies .   "
},
{
  "id": "thm-Injection-TrivialKernel",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#thm-Injection-TrivialKernel",
  "type": "Theorem",
  "number": "1.8.11",
  "title": "",
  "body": "  Let be a linear transformation. Then is injective if and only if has only the trivial solution.   "
},
{
  "id": "subsec-SpecialLinearTransformations-8",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-SpecialLinearTransformations-8",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " This is a biconditional statement. Proving this statement comes in to parts:   Forward direction ( ): Assume that is injective. We want to show that the equation has only the trivial solution.  Because is a linear transformation, we know that it maps the zero vector to the zero vector, meaning . Suppose there is some vector in such that . Then we have: Since we assumed is injective, the outputs being equal guarantees that the inputs must also be equal. Therefore, . This shows that the trivial solution is the only solution.   Backward direction ( ): Assume that has only the trivial solution. We want to show that is injective.  Suppose there are vectors and in such that . Subtracting from both sides, we have By the linearity properties, this implies that By our initial assumption, the only vector that maps to the zero vector is the zero vector itself. This forces the input to be zero. That is, This shows that , and hence is injective.  What we have established that these two claims are either both true or both false (we assume one of them is true, and show the other one is also true). Another way of calling biconditional statements are equivalence statement.  "
},
{
  "id": "thm-Surjection-SpanCodomain",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#thm-Surjection-SpanCodomain",
  "type": "Theorem",
  "number": "1.8.12",
  "title": "",
  "body": "  Let be a linear transformation with standard matrix . Then is surjective if and only if the columns of span the codomain, .   "
},
{
  "id": "subsec-SpecialLinearTransformations-11",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-SpecialLinearTransformations-11",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Observe that the theorem is a biconditional statement. But instead of proving both directions, let's do a slick trick!  Notation clarification! The symbol means implication!  Let's consider the forward direction. The chain of implication looks like this: Okay. And this is supposed to be impressive how?  Observe that the statements here are all equivalent! That is, to prove the other direction, we can just reverse all the implication arrows and the argument stays true! So the proof of this theorem is to change all the implication arrow to a biconditional arrow!   "
},
{
  "id": "thm-Injection-LinearIndependence",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#thm-Injection-LinearIndependence",
  "type": "Theorem",
  "number": "1.8.13",
  "title": "",
  "body": "  Let be a linear transformation with standard matrix . Then is injective if and only if the columns of are linearly independent.   "
},
{
  "id": "subsec-SpecialLinearTransformations-13",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-SpecialLinearTransformations-13",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": " We can prove this theorem using the same slick trick!   "
},
{
  "id": "subsec-SpecialLinearTransformations-14",
  "level": "2",
  "url": "sec19-MatrixLinearTransformation.html#subsec-SpecialLinearTransformations-14",
  "type": "Example",
  "number": "1.8.14",
  "title": "",
  "body": " Let defined by Is a linear transformation? Is it injective? Is it surjective?  First, we determine if is a linear transformation. We can \"factor out\" the variables to rewrite the transformation as a matrix-vector product: Let be this matrix. Because , it is a matrix transformation. Every matrix transformation is a linear transformation, so yes, is a linear transformation.  Next, we check if is injective. By our previous theorem, is injective if and only if the homogeneous equation has only the trivial solution. To determine this, we find the reduced row echelon form of the standard matrix : Because there is a pivot in every column, there are no free variables. The equation has only the trivial solution, . Therefore, is injective.  Finally, we determine if is surjective. The transformation is surjective if and only if its columns span the codomain, . This occurs if and only if there is a pivot position in every row of . Looking at the reduced row echelon form of , the third row does not contain a pivot. Consequently, the columns of do not span , meaning there are vectors in the codomain that cannot be reached. Thus, is not surjective.  "
},
{
  "id": "sec21-MatrixOperations",
  "level": "1",
  "url": "sec21-MatrixOperations.html",
  "type": "Section",
  "number": "2.1",
  "title": "Matrix Operations",
  "body": " Matrix Operations   So far, we have seen matrices popping up as we tackled systems of linear equations. Now, it is time to build our understanding from the ground up and formally define what a matrix is.  In this section, we will establish the core operations for matrices: addition, scalar multiplication, transposition, and matrix multiplication, as well as their properties!    After this section, students will be able to:     determine the size of a matrix and identify specific entries using subscript notation.    compute the sum, scalar multiple, and transpose of given matrices.    determine if two matrices can be multiplied based on their sizes and compute their product.    apply algebraic properties to simplify matrix expressions and demonstrate why matrix multiplication is generally non-commutative.      We actually have learned (or at least heard of) most of the matrix operations in class before. Let's formally introduce the operations!   What exactly is a matrix?  We have dealt with matrices in the last section. Let's formally define what a matrix is since this chapter is all about matrices!  A matrix is a rectangular array of entries (typically numbers). The size of a matrix is determined by the number of rows and columns it has, and it is usually given in the form of , where is the number of rows and is the number of columns.  For example, the following matrix has 2 rows and 3 columns, so its size is .   What are the sizes of each of the following matrices?        Basic Matrix Operations  We will learn three operations on matrices: matrix addition, scalar multiplication, and transposition. Let's introduce all of these operations using examples!  Suppose we have the matrices and .  To add two matrices together, we add all corresponding entries (those would be the things inside the brackets) and the sum is the corresponding entry in the answer.   To multiply a scalar by a matrix , we multiply the scalar by every entry of the matrix and that product is the corresponding entry in the answer.   The transpose of a matrix , denoted , is obtained by flipping it across the main diagonal. That is, every row of the original matrix becomes the corresponding column of the transpose and every column of the original matrix becomes the corresponding row of the transpose.   And we can combine all of these operations in lots of ways!   Let's say we want to compute . Then we have     Let and . Compute the following (if impossible, explain why):                              1.   2. Observe that we can just subtract the corresponding entries of from the corresponding entries of to get the answer. Once we have addition and scalar multiplication, we can define subtraction as adding the negatives.  3. Observe that is a matrix but is a matrix. We cannot add these two matrices together because not every entry of has a corresponding entry in and vice versa.  4.   5.     We can make some observations about these operations:   We can ONLY add two matrices when they are the exact same size . This makes sense because we do it by adding corresponding entries, so if they are different sizes, we won't have those for all of the entries!    If is an matrix, then is an matrix. This makes sense because every row of becomes a column of which also forces every column of to become a row of .     is called a square matrix if it has the same number of rows as columns. Notice that the only way can be the same size as is if is a square matrix.    When we transpose a matrix twice, we get back to the original matrix (you can \"see\" this if you imagine flipping it over the main diagonal twice).  Terminology: the main diagonal of a matrix is the one going down from left to right.       Subscript Notation for Matrices  We can identify the location of any entry of a matrix by saying which row and column it lives in. For example, in our matrix The entry in the second row and third column is . We can say this in symbol as: The entry is .  We can also use subscript notation to denote the entries of a matrix. We indicate the row first and then the column using subscripts. For example, the in matrix can be denoted as .  A generic matrix would be denoted by   And any matrix can be denoted in shorthand by . If your matrix is named you would use to denote the entry in the th row and the th column.   Note: We always identify the row first and then the column when describing an entry of a matrix.  Now we can describe the operations we learned using the subscript notation!  Suppose and , and let be a scalar (you can just think of a scalar as a number since in this this class they always will be). Then since we add two matrices by adding corresponding entries.  Similarly, since we multiply a scalar by a matrix by multiplying it by every entry of a matrix, and since we transpose a matrix by turning every row into a column (and every column into a row).    Rules for Matrix Addition and Scalar Multiplication  Let , , and be matrices ( and fixed), and let and be real numbers (scalars). Then the following properties hold:   Matrix Addition is commutative . That is,     Matrix Addition is associative . That is,     There exists a zero matrix  such that where is the matrix in which every entry is .    For every matrix , there exists a matrix such that where is called the additive inverse of and is obtained by multiplying every entry of by .    Scalar Multiplication distributes over Matrix Addition. That is,     Scalar Multiplication distributes over Scalar Addition. That is,     Scalar Multiplication by a Product of Two Scalars is the Same as Scalar Multiplication by One Scalar Followed by Scalar Multiplication by the Other Scalar. That is,     Scalar Multiplication by leaves a matrix unchanged. That is,      Let's prove them all but only in the case for matrices. These proofs can easily be generalized using and variables for subscripts to make the matrices completely general .   Proof of these Rules for Matrices  Let , , and be arbitrary matrices. And ket and be arbitrary real numbers (scalars).  1. (Communitivity):   2. (Associativity):   3. (Zero Matrix):   4. (Additive Inverse): Then apply commutativity to get (Or just do a similar proof. Either way works!)  5. (Distributive Part 1):   6. (Distributive Part 2):   7. (Multiplication by Product of Scalars):   8. (Scalar Multiplication by 1):   Now try convincing yourself that these properties hold for matrices of any size by generalizing the above proofs!     Rules for Transposes  Let and be matrices. (Note that this notation doesn't mean the matrices aren't square. It just means we aren't assuming that they are). Then the following properties hold:    will be an matrix.  If you turn every row into a column then the number of columns of the new matrix is the same as the number of rows in the original (similar with columns and rows). You can also see this by imagining flipping the matrix across its main diagonal.       If you turn every row into a column and then do that again, you put the matrix right back where you started. It is even more clear if you imagine reflecting the matrix across its main diagonal twice.       It doesn't matter whether you (1) multiply every entry by and then flip across the main diagonal OR (2) flip across the main diagonal and then multiply every entry by . In either case you turn into .       It doesn't matter whether you (1) add all the corresponding entries and then flip across the main diagonal OR (2) flip each matrix across the main diagonal and then add all the corresponding entries. In either case the entry is .     Last but not least, we call a matrix symmetric if it equals its own transpose. That is, is symmetric if . They are called symmetric because if you flip the matrix over the main diagonal it doesn't change it!  One immediate consequence of this property is that if is symmetric, then must be a square matrix (or else, the two matrices won't even be the same size, let alone equal).  For example, the matrix is symmetric because     Matrix Multiplication  Recall when you multiply a column vector by a matrix, you just compute the dot product of that vector by each row vector of the matrix. Then you get a nice column vector.  If you want to multiply a matrix by another matrix, you just do that for every column of the matrix on the right and you get all of the columns in your answer matrix. And that is how you multiply matrices!   Let's multiply the following two matrices   Oberve that the matrix on the right consists of two columns. We know how to multiply the column (aka a column vector) by the matrix. Let's do that! and Then the first column vector we get is the first column in the answer matrix and the second column vector we get is the second column in the answer matrix. That is,    Writing out the general formula for matrix multiplication using all the little subscripts would be horrible. But there is a clever way to write matrices that makes it a bit easier.  Suppose you want to multiply a matrix by the matrix . Instead of writing down all the entries of using double subscripts, we can write the matrix as a collection of columns using single subscripts. So the matrix looks like this: Then where each column of the answer is a product of with the corresponding column vector of . And each of those products are computed by taking the dot product of each row of with that column vector.  Summary: the entry of the matrix is computed by taking the dot product of the th row of with the -th column of (rows times columns).   Multiply! If it is impossible, say why!               1.   2. This is impossible. You can't multiply a matrix by a matrix. None of the dot products work!  For example, if you want to find the entry in the answer matrix, then you would find the dot product of the first row of the matrix to the left and the first column of the matrix to the right. But... there are three entries in the first row vector and four entries in the column vector... The sizes don't work out... (there is nothing we can multiply by the )...    To make sure the dot products work out for matrix multiplication, we want to make sure the number of columns in the first matrix matches up with the number of rows in the second matrix. That is, to multiply two matrices and with the size of being , the size of must be . The answer matrix is of the size of .  New operation means more rules! Here is a theorem that collects some rules about matrix multiplication.   Matrix Multiplication Rules   Suppose , , and are matrices that are the right size for the products to be defined. And suppose is the identity matrix that is the right size as well. The following properties hold:    Identity Property : and      Associativity :     (Left) Distributive Property :     (Right) Distributive Property :      Regrouping with Scalar Multiplication ; For any scalar ,      Transpose of a Product :        The first five rules should not be surprising. Spend some time to convince yourself why they are true!   Proof Ideas and Sketches Using Smaller Matrices     The first equation follows from multiplying the identify matrix by a column vector. You get that same column vector as the answer. Since that would happen for every column of , you will get as your answer.  The second equation is true because when you multiply by the th column of , the single in the th row of that column will reproduce the th column of the matrix.    This one gets messy when the matrices start getting bigger, so let's verify it in the case. The proof in general works the same just with a lot more subscripts to juggle! and Comparing the results, we can see that the matrix multiplication is associative because multiplication of numbers is!    This one isn't quite as messy as the previous one, but still warrants limiting to case:     The verification of this one works just like the previous one with the obvious changes. Again it comes down to the fact that we have the distributive property in basic arithmetic.    I encourage you to verify this for the case. This one is much less messy than the ones we have done!      You may find the last rule a bit surprising. Why isn't equal to ?  This surprise should tell you that matrix multiplication is not commutative!  Let's verify this one for the case! If you computed and compare it to this you would find you would NOT get this result! But if we commute all of the products inside this matrix... This is what you would get for !   Observe that commutativity is not included in the theorem. That is because matrix multiplication is NOT commutative, which means in general it is NOT true that . Sometimes it happens that way but often it does not!  A quick counter-example can show that matrix multiplication is non-commutative. Let and . Observe that but Hence ...   "
},
{
  "id": "sec21-MatrixOperations-2-3",
  "level": "2",
  "url": "sec21-MatrixOperations.html#sec21-MatrixOperations-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     determine the size of a matrix and identify specific entries using subscript notation.    compute the sum, scalar multiple, and transpose of given matrices.    determine if two matrices can be multiplied based on their sizes and compute their product.    apply algebraic properties to simplify matrix expressions and demonstrate why matrix multiplication is generally non-commutative.    "
},
{
  "id": "subsec-MatrixIntro-3",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-MatrixIntro-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix size "
},
{
  "id": "subsec-MatrixIntro-5",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-MatrixIntro-5",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "",
  "body": " What are the sizes of each of the following matrices?     "
},
{
  "id": "subsec-BasicMatrixOperations-8",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-BasicMatrixOperations-8",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": " Let's say we want to compute . Then we have   "
},
{
  "id": "subsec-BasicMatrixOperations-9",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-BasicMatrixOperations-9",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "",
  "body": " Let and . Compute the following (if impossible, explain why):                              1.   2. Observe that we can just subtract the corresponding entries of from the corresponding entries of to get the answer. Once we have addition and scalar multiplication, we can define subtraction as adding the negatives.  3. Observe that is a matrix but is a matrix. We cannot add these two matrices together because not every entry of has a corresponding entry in and vice versa.  4.   5.    "
},
{
  "id": "subsec-BasicMatrixOperations-10",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-BasicMatrixOperations-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square matrix main diagonal "
},
{
  "id": "subsec-Rules-MatrixAdditionScalarMultiplication-2",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-Rules-MatrixAdditionScalarMultiplication-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commutative associative zero matrix additive inverse "
},
{
  "id": "subsec-Rules-MatrixAdditionScalarMultiplication-4",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-Rules-MatrixAdditionScalarMultiplication-4",
  "type": "Proof",
  "number": "1",
  "title": "Proof of these Rules for <span class=\"process-math\">\\(2 \\times 3\\)<\/span> Matrices.",
  "body": " Proof of these Rules for Matrices  Let , , and be arbitrary matrices. And ket and be arbitrary real numbers (scalars).  1. (Communitivity):   2. (Associativity):   3. (Zero Matrix):   4. (Additive Inverse): Then apply commutativity to get (Or just do a similar proof. Either way works!)  5. (Distributive Part 1):   6. (Distributive Part 2):   7. (Multiplication by Product of Scalars):   8. (Scalar Multiplication by 1):   Now try convincing yourself that these properties hold for matrices of any size by generalizing the above proofs!  "
},
{
  "id": "subsec-Rules-TransposeMatrices-3",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-Rules-TransposeMatrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "subsec-MatrixMultiplication-4",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-MatrixMultiplication-4",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": " Let's multiply the following two matrices   Oberve that the matrix on the right consists of two columns. We know how to multiply the column (aka a column vector) by the matrix. Let's do that! and Then the first column vector we get is the first column in the answer matrix and the second column vector we get is the second column in the answer matrix. That is,   "
},
{
  "id": "subsec-MatrixMultiplication-8",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-MatrixMultiplication-8",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "",
  "body": " Multiply! If it is impossible, say why!               1.   2. This is impossible. You can't multiply a matrix by a matrix. None of the dot products work!  For example, if you want to find the entry in the answer matrix, then you would find the dot product of the first row of the matrix to the left and the first column of the matrix to the right. But... there are three entries in the first row vector and four entries in the column vector... The sizes don't work out... (there is nothing we can multiply by the )...   "
},
{
  "id": "thm-RulesMatrixMultiplication",
  "level": "2",
  "url": "sec21-MatrixOperations.html#thm-RulesMatrixMultiplication",
  "type": "Theorem",
  "number": "2.1.6",
  "title": "Matrix Multiplication Rules.",
  "body": " Matrix Multiplication Rules   Suppose , , and are matrices that are the right size for the products to be defined. And suppose is the identity matrix that is the right size as well. The following properties hold:    Identity Property : and      Associativity :     (Left) Distributive Property :     (Right) Distributive Property :      Regrouping with Scalar Multiplication ; For any scalar ,      Transpose of a Product :       "
},
{
  "id": "subsec-MatrixMultiplication-13",
  "level": "2",
  "url": "sec21-MatrixOperations.html#subsec-MatrixMultiplication-13",
  "type": "Proof",
  "number": "1",
  "title": "Proof Ideas and Sketches Using Smaller Matrices.",
  "body": " Proof Ideas and Sketches Using Smaller Matrices     The first equation follows from multiplying the identify matrix by a column vector. You get that same column vector as the answer. Since that would happen for every column of , you will get as your answer.  The second equation is true because when you multiply by the th column of , the single in the th row of that column will reproduce the th column of the matrix.    This one gets messy when the matrices start getting bigger, so let's verify it in the case. The proof in general works the same just with a lot more subscripts to juggle! and Comparing the results, we can see that the matrix multiplication is associative because multiplication of numbers is!    This one isn't quite as messy as the previous one, but still warrants limiting to case:     The verification of this one works just like the previous one with the obvious changes. Again it comes down to the fact that we have the distributive property in basic arithmetic.    I encourage you to verify this for the case. This one is much less messy than the ones we have done!     "
},
{
  "id": "sec22-InverseMatrix",
  "level": "1",
  "url": "sec22-InverseMatrix.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Inverse of a Matrix",
  "body": " The Inverse of a Matrix   In our journey through linear algebra, we have explored how to multiply matrices and how to represent systems of equations as the matrix equation . A natural mathematical question arises: can we \"undo\" matrix multiplication? In the realm of real numbers, we solve algebraic equations like by multiplying by the reciprocal (or inverse) of . In this section, we investigate whether a similar structural concept exists for matrices.    After this section, students will be able to:     find the inverse of a invertible matrix using a formula;    find the inverse of an invertible matrix using the Gaussian Elimination algorithm;    solve systems of linear equations using matrix inverses;    construct elementary matrices and its inverse for each elementary row operation;    express any invertible matrix, and its inverse, as a product of elementary matrices.       Let . Find a matrix such that where is the identity matrix.   There are two possible strategies:   Strategy #1: Guess and check! This strategy is doable for a matrix but usually quite tedious. The matrix is made special so that it isn't too bad at all.   Strategy #2: Remember how matrix multiplication works: When we multiply by , each column of the answer is found by multiplying the corresponding column of by .  So we know that if is the first column of , then we will need to be since that is the first column of the identity matrix. If we call the entries of that column and , then we can solve a system of equations to figure out what and are!  Then we can do a similar process to figure out what the second column of is!    Using Strategy #1...  You probably discovered that the only way to get the in the top left of the answer is to put a in the bottom left of . Then you can figure out that you need a in the top left of to get the in the bottom left of the answer.  Now you need a in the top right of the answer. because of the in , your answer for this spot will be times whatever you put in the bottom right of . So that has to be a .  Finally that in the bottom right of means that you need a in your top right spot in order to get the you need in the bottom right of the identity matrix. So the matrix     Using Strategy #2...  If we call our first column of  , then we know that we need We can solve this using the substitution method easily since the top equation tells us and substituting this into the second equation gives us So the first column of will have to be .  Now if we call our second column of  , then we know that we need This one is even quicker to solve because the top equation tells us and substituting this into the second equation gives us . So the second column of will have to be .  Therefore, the matrix .  And we can quickly verify that :    Now that you found , take a minute and compute .    is also !    This matrix is a special buddy of . This is called the inverse of !   Inverse of a Matrix   Inverse of a Matrix   If is a square matrix, a matrix is called an inverse of if and only if . A matrix that has an inverse is called an invertible matrix .      An exmaple:  is invertible and since...    A non-example:  is NOT invertible because no matter what matrix you try you will get a row of zeros:      A matrix can only have one inverse.     Suppose and are both inverses of . Then This means .  Multiplying both sides of equation (on the left) by , we get Using the associative property, we get Since we also know that , then .  So by the identity property, .   In the case, there is a quick way to find out if a matrix is invertible and there is a nice formula for the inverse. We just have to define two terms:   Determinant of Matrices   Let be a matrix. The determinant of the matrix is defined by      Adjugate of Matrices   Let be a matrix. The adjugate of the matrix is The adjugate of can be obtained by (1) swapping the elements in the main diagonal, and (2) changing the sign of the elements not on the main diagonal.    The matrix is invertible if and only if . And is    Let . Notice that Since , we know that exists.  We can also find . We know that . Then   If you want to verify that is indeed the inverse of , try multiplying them together and you should get back .   Remember how we worked so hard to solve systems of linear equations in week 1? And remember that every system of linear equations can be written as a Matrix Equation in ? Well, if the coefficient matrix is invertible, then we can solve this equation using just like back in Algebra 1!  Let's assume that is invertible, then . Say we have a Matrix Equation . We certainly can multiply the same thing (say ) on two sides of the equation. We get So the solution to this equation must be .  If you want to verify that this is indeed a solution, then we can plug in into the left side of our equation. We see that So this really is a solution to the equation! Let's make it a theorem!    If is an invertible matrix, then the Matrix Equation has exactly one solution. The solution is .     Consider the following system of linear equations: The Matrix Equation version of this system is , where   Notice that So is invertible! We can find the solution using the little theorem we just came up with!  Since , then we get By our theorem, the solution to the system is     Solve the following system of linear equation by   writing the system as a Matrix Equation;    finding the inverse of the coefficient matrix;    using the inverse to solve the system.      1. The matrix equation is   2. The determinant is and the adjugate matrix is , so the inverse is   3. The solution is     There is another way to compute inverse matrices efficiently, which is using the Gaussian Elimination algorithm we learned back in .  Suppose we want to find the inverse of a matrix . That is, we are looking for a matrix such that Since we multiply these matrices by multiplying the by each of the column vectors and , the first matrix-vector product needs to give us the first column of and the second matrix-vector product needs to give us the second column of . That means that finding the inverse boils down to solving two systems of equations given by the matrix equations: Observe that these two systems of linear equations have the same coefficient matrix. So if we used augmented matrices, we would end up doing the same steps to put the matrices into reduced row echelon form.  The technique based on this idea is to put these two equations into ONE giant augmented matrix: But it gets even better! Let's do an example...   Let's say we want to find the inverse of the matrix . We will first make our big augmented matrix: Now we will put this thing into reduced row echelon form!  Step 1: Swap Row 1 and Row 2, we get We have our first leading and it already has a zero beneath it.  Step 2: Multiply Row 2 by , we get Now the matrix is in row echelon form. Let's get it into reduced row echelon form by getting a zero above the second leading .  Step 3: Multiply times Row 2 to Row 1 (and replace Row 1), we get Notice that the part on the left is the identity matrix. And, notice that the part on the right is the inverse!   That is basically the technique:   Step 1: Make a big augmented matrix with on the left side and on the right side.    Step 2: Put the augmented matrix into reduced row echelon form.   If the matrix is invertible, then the reduced row-echelon form will have on the left side and on the right side.   Use the Gaussian Elimination algorithm to find the inverse of the matrix    The big augmented matrix is   First let's get zeros beneath our first leading :   Now we need to get our second leading by multiplying Row 2 by :   Now we need a zero beneath our second leading . We can multiply Row 2 by and adding it to Row 3:   Now to get our last leading , we need to multiply Row 3 by :   Then we need to get zeros above this third leading . So, let's add times Row 3 to Row 2 and -3 times Row 3 to Row 1:   So the inverse is       Important Theorems and Facts about Inverses   Cancellation Law for Matrices   Suppose and are matrices and is an invertible matrix. Then the following holds:   If , then .    If , then .        Part 1: Suppose . Then Therefore,   The proof of Part 2 would be similar.     Suppose is invertible. Then the inverse of is the transpose of . That is,      Suppose is invertible. Then But and . Substituting these into the above equation, we get So the inverse of is the transpose of .     If and are invertible matrices and is defined, then     This is also called \"shoes and socks\" because you take off your shoes and socks in the reverse order in which you put them on. That is what this theorem says about matrix inverses.       There are also a collection of a bunch of facts about inverses (including some of the ones we have just mentioned).  Suppose the following matrices are all square and the same size.    is invertible and .    If is invertible, so is and .    If and are invertible, so is , and .    If are all invertible, so is their product , and .    If is invertible, then so is , and .    If is invertible and is a number, then is invertible and .    If is invertible, so is its transpose , and .       Elementary Matrices  There is an another way of finding the inverse of a matrix using elementary matrices . This is essentially the same as our Gaussian Elimination Algorithm but in another presentation using matrix multiplication.  We've learned how to solve systems of equations and find matrix inverses by using the Gaussian Elimination algorithm. And we learned how to multiply matrices. It turns out that these two things are related!  Each of the three elementary row operations can be performed by multiplying by an elementary matrix .  Let's see this by looking at an example!   Consider the system: The augmented matrix is   Recall there are three elementary row operations we can perform to an augmented matrix.   We could swap the two rows by multiplying by the matrix :     We could multiply Row 2 by by multiplying by the matrix :     We could add times Row 1 to Row 2 (and replace Row 2) by multiplying by the matrix :    Notice that in each case, the matrix that we used to do the elementary operation is exactly the matrix you would get by doing that same elementary operation to the identity matrix. WHAT!??   If we swap the two rows of , we get     If we multiply Row 2 of by , we get     If we add times Row 1 of to Row 2 (and replace Row 2), we get        Summary: Every elementary row operation corresponds to an elementary matrix , , that can be created by performing that operation on the identity matrix. We can perform that operation on any matrix by computing the product .   Consider the matrix . Suppose we did the following two steps:   Swap Row 1 and Row 2;    Add times Row 1 to Row 2 (and replace Row 2).   That would look like this:   The first step corresponds to the elementary matrix and the second step corresponds to the elementary matrix ( Note: When we made , we started with a brand new identity matrix rather than using .)  Now notice that    The inverse of an elementary matrix , is also an elementary matrix and can be used to perform the inverse of the elementary operation (the operation that would undo the original row operation).   If corresponds to adding times Row 1 to Row 3, then the elementary matrix is Then and this corresponds to adding times Row 1 to Row 3.   Here is the claim: A matrix is invertible if and only if it is the product of elementary matrices .  Let's think about our method for finding inverses using Gaussian Elimination algorithm. We create a big augmented matrix and then do elementary operations until we get to .  Now we know that we could do this by multiplying the augmented matrix by the corresponding elementary matrices. Let's call those elementary matrices . Then if we just look at the right side of the big augmented matrix, we would see that Take the inverse of both sides, and we get   We can use what we just learned to describe a process that will always work to write any invertible matrix as a product of elementary matrices:   Put the matrix into reduced row echelon form. If it is invertible, then this form will be the identity matrix.    For each step, write down the corresponding elementary matrix (writing them from right to left). Remember that each time we need to start with a brand new identity matrix to make our elementary matrix!  If you multiply the elementary matrices, you will get the inverse of the original matrix.    Take the inverse of each of the elementary matrices and then write them down in the reverse order. Then we are done!      Consider this matrix and we want to find .  First, let's multiply the top row by to get our leading : This first step corresponds to the elementary matrix   Second, let's add times Row 1 to Row 2 (and replace Row 2) to get a zero below the first leading : This second step corresponds to the elementary matrix   Third, let's multiply the second row by to get our second leading : This third step corresponds to the elementary matrix   Fourth, let's add times Row 2 to Row 1 (and replace Row 1) to put the matrix into reduced row echelon form: This fourth step corresponds to the elementary matrix   So   We can write all of the inverses of the elementary matrices by using the reverse operation on the identity matrix:   The inverse of is .    The inverse of is .    The inverse of is .    The inverse of is .   So     Write the following matrix AND its inverse as a product of elementary matrices.    Step 1: Swap Row 1 and Row 2 to get This corresponds to the elementary matrix   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get This corresponds to the elementary matrix   Step 3: Multiply Row 2 by to get This corresponds to the elementary matrix   Step 4: Multiply Row 3 by to get This corresponds to the elementary matrix   Step 5: Add times Row 2 to Row 1 (and replace Row 1) to get This corresponds to the elementary matrix   Step 6: Add times Row 3 to Row 1 (and replace Row 1) to get This corresponds to the elementary matrix   Step 7: Add times Row 3 to Row 2 (and replace Row 2) to get This corresponds to the elementary matrix   This tells us that If we multiply those out we see that   And taking the inverse of both sides of the giant product (and using the \"shoes and socks\" rule), we see that So let's find the inverses of each of these matrices by performing the inverse operation on the identity matrix:    swaps Row 1 and Row 2 and that operation is its own inverse (do it twice and you get right back where you started), so .     adds Row 1 to Row 3, and the inverse of that is adding times Row 1 to Row 2, so .     multiplies Row 2 by , and the inverse of that is multiplying Row 2 by , so .     multiplies Row 3 by , and that operation is its own inverse, so .     adds times Row 2 to Row 1, and the inverse of that is adding times Row 2 to Row 1, so .     adds times Row 3 to Row 1, and the inverse of that is adding times Row 3 to Row 1, so .     adds times Row 3 to Row 2, and the inverse of that is adding times Row 3 to Row 2, so .   This means...      "
},
{
  "id": "sec22-InverseMatrix-2-2",
  "level": "2",
  "url": "sec22-InverseMatrix.html#sec22-InverseMatrix-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     find the inverse of a invertible matrix using a formula;    find the inverse of an invertible matrix using the Gaussian Elimination algorithm;    solve systems of linear equations using matrix inverses;    construct elementary matrices and its inverse for each elementary row operation;    express any invertible matrix, and its inverse, as a product of elementary matrices.    "
},
{
  "id": "sec22-InverseMatrix-3",
  "level": "2",
  "url": "sec22-InverseMatrix.html#sec22-InverseMatrix-3",
  "type": "Investigation",
  "number": "2.2.1",
  "title": "",
  "body": " Let . Find a matrix such that where is the identity matrix.   There are two possible strategies:   Strategy #1: Guess and check! This strategy is doable for a matrix but usually quite tedious. The matrix is made special so that it isn't too bad at all.   Strategy #2: Remember how matrix multiplication works: When we multiply by , each column of the answer is found by multiplying the corresponding column of by .  So we know that if is the first column of , then we will need to be since that is the first column of the identity matrix. If we call the entries of that column and , then we can solve a system of equations to figure out what and are!  Then we can do a similar process to figure out what the second column of is!    Using Strategy #1...  You probably discovered that the only way to get the in the top left of the answer is to put a in the bottom left of . Then you can figure out that you need a in the top left of to get the in the bottom left of the answer.  Now you need a in the top right of the answer. because of the in , your answer for this spot will be times whatever you put in the bottom right of . So that has to be a .  Finally that in the bottom right of means that you need a in your top right spot in order to get the you need in the bottom right of the identity matrix. So the matrix     Using Strategy #2...  If we call our first column of  , then we know that we need We can solve this using the substitution method easily since the top equation tells us and substituting this into the second equation gives us So the first column of will have to be .  Now if we call our second column of  , then we know that we need This one is even quicker to solve because the top equation tells us and substituting this into the second equation gives us . So the second column of will have to be .  Therefore, the matrix .  And we can quickly verify that :    Now that you found , take a minute and compute .    is also !   "
},
{
  "id": "sec22-InverseMatrix-4",
  "level": "2",
  "url": "sec22-InverseMatrix.html#sec22-InverseMatrix-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "def-inverse-matrix",
  "level": "2",
  "url": "sec22-InverseMatrix.html#def-inverse-matrix",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Inverse of a Matrix.",
  "body": " Inverse of a Matrix   If is a square matrix, a matrix is called an inverse of if and only if . A matrix that has an inverse is called an invertible matrix .   "
},
{
  "id": "subsec-InverseMatrices-3",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-InverseMatrices-3",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  An exmaple:  is invertible and since...    A non-example:  is NOT invertible because no matter what matrix you try you will get a row of zeros:   "
},
{
  "id": "thm-Uniqueness_Inverses",
  "level": "2",
  "url": "sec22-InverseMatrix.html#thm-Uniqueness_Inverses",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "",
  "body": "  A matrix can only have one inverse.   "
},
{
  "id": "subsec-InverseMatrices-5",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-InverseMatrices-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Suppose and are both inverses of . Then This means .  Multiplying both sides of equation (on the left) by , we get Using the associative property, we get Since we also know that , then .  So by the identity property, .  "
},
{
  "id": "def-Determinant-2x2Matrices",
  "level": "2",
  "url": "sec22-InverseMatrix.html#def-Determinant-2x2Matrices",
  "type": "Definition",
  "number": "2.2.4",
  "title": "Determinant of <span class=\"process-math\">\\(2\\times 2\\)<\/span> Matrices.",
  "body": " Determinant of Matrices   Let be a matrix. The determinant of the matrix is defined by    "
},
{
  "id": "def-Adjugate-2x2Matrices",
  "level": "2",
  "url": "sec22-InverseMatrix.html#def-Adjugate-2x2Matrices",
  "type": "Definition",
  "number": "2.2.5",
  "title": "Adjugate of <span class=\"process-math\">\\(2\\times 2\\)<\/span> Matrices.",
  "body": " Adjugate of Matrices   Let be a matrix. The adjugate of the matrix is The adjugate of can be obtained by (1) swapping the elements in the main diagonal, and (2) changing the sign of the elements not on the main diagonal.   "
},
{
  "id": "subsec-InverseMatrices-10",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-InverseMatrices-10",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": " Let . Notice that Since , we know that exists.  We can also find . We know that . Then   If you want to verify that is indeed the inverse of , try multiplying them together and you should get back .  "
},
{
  "id": "thm-UniqueSolution-InvertibleMatrix",
  "level": "2",
  "url": "sec22-InverseMatrix.html#thm-UniqueSolution-InvertibleMatrix",
  "type": "Theorem",
  "number": "2.2.7",
  "title": "",
  "body": "  If is an invertible matrix, then the Matrix Equation has exactly one solution. The solution is .   "
},
{
  "id": "subsec-InverseMatrices-15",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-InverseMatrices-15",
  "type": "Example",
  "number": "2.2.8",
  "title": "",
  "body": " Consider the following system of linear equations: The Matrix Equation version of this system is , where   Notice that So is invertible! We can find the solution using the little theorem we just came up with!  Since , then we get By our theorem, the solution to the system is   "
},
{
  "id": "subsec-InverseMatrices-16",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-InverseMatrices-16",
  "type": "Checkpoint",
  "number": "2.2.9",
  "title": "",
  "body": " Solve the following system of linear equation by   writing the system as a Matrix Equation;    finding the inverse of the coefficient matrix;    using the inverse to solve the system.      1. The matrix equation is   2. The determinant is and the adjugate matrix is , so the inverse is   3. The solution is    "
},
{
  "id": "subsec-InverseMatrices-20",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-InverseMatrices-20",
  "type": "Example",
  "number": "2.2.10",
  "title": "",
  "body": " Let's say we want to find the inverse of the matrix . We will first make our big augmented matrix: Now we will put this thing into reduced row echelon form!  Step 1: Swap Row 1 and Row 2, we get We have our first leading and it already has a zero beneath it.  Step 2: Multiply Row 2 by , we get Now the matrix is in row echelon form. Let's get it into reduced row echelon form by getting a zero above the second leading .  Step 3: Multiply times Row 2 to Row 1 (and replace Row 1), we get Notice that the part on the left is the identity matrix. And, notice that the part on the right is the inverse!  "
},
{
  "id": "subsec-InverseMatrices-22",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-InverseMatrices-22",
  "type": "Checkpoint",
  "number": "2.2.11",
  "title": "",
  "body": " Use the Gaussian Elimination algorithm to find the inverse of the matrix    The big augmented matrix is   First let's get zeros beneath our first leading :   Now we need to get our second leading by multiplying Row 2 by :   Now we need a zero beneath our second leading . We can multiply Row 2 by and adding it to Row 3:   Now to get our last leading , we need to multiply Row 3 by :   Then we need to get zeros above this third leading . So, let's add times Row 3 to Row 2 and -3 times Row 3 to Row 1:   So the inverse is    "
},
{
  "id": "thm-CancellationLaw-Matrices",
  "level": "2",
  "url": "sec22-InverseMatrix.html#thm-CancellationLaw-Matrices",
  "type": "Theorem",
  "number": "2.2.12",
  "title": "Cancellation Law for Matrices.",
  "body": " Cancellation Law for Matrices   Suppose and are matrices and is an invertible matrix. Then the following holds:   If , then .    If , then .      "
},
{
  "id": "subsec-ImportantTheorems-Inverses-3",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-ImportantTheorems-Inverses-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Part 1: Suppose . Then Therefore,   The proof of Part 2 would be similar.  "
},
{
  "id": "thm-Transpose-Inverse",
  "level": "2",
  "url": "sec22-InverseMatrix.html#thm-Transpose-Inverse",
  "type": "Theorem",
  "number": "2.2.13",
  "title": "",
  "body": "  Suppose is invertible. Then the inverse of is the transpose of . That is,    "
},
{
  "id": "subsec-ImportantTheorems-Inverses-5",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-ImportantTheorems-Inverses-5",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Suppose is invertible. Then But and . Substituting these into the above equation, we get So the inverse of is the transpose of .  "
},
{
  "id": "thm-Product-Inverse",
  "level": "2",
  "url": "sec22-InverseMatrix.html#thm-Product-Inverse",
  "type": "Theorem",
  "number": "2.2.14",
  "title": "",
  "body": "  If and are invertible matrices and is defined, then    "
},
{
  "id": "subsec-ImportantTheorems-Inverses-8",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-ImportantTheorems-Inverses-8",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-ElementaryMatrices-4",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-ElementaryMatrices-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary matrix "
},
{
  "id": "subsec-ElementaryMatrices-6",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-ElementaryMatrices-6",
  "type": "Example",
  "number": "2.2.15",
  "title": "",
  "body": " Consider the system: The augmented matrix is   Recall there are three elementary row operations we can perform to an augmented matrix.   We could swap the two rows by multiplying by the matrix :     We could multiply Row 2 by by multiplying by the matrix :     We could add times Row 1 to Row 2 (and replace Row 2) by multiplying by the matrix :    Notice that in each case, the matrix that we used to do the elementary operation is exactly the matrix you would get by doing that same elementary operation to the identity matrix. WHAT!??   If we swap the two rows of , we get     If we multiply Row 2 of by , we get     If we add times Row 1 of to Row 2 (and replace Row 2), we get      "
},
{
  "id": "subsec-ElementaryMatrices-7",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-ElementaryMatrices-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary matrix "
},
{
  "id": "subsec-ElementaryMatrices-8",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-ElementaryMatrices-8",
  "type": "Example",
  "number": "2.2.16",
  "title": "",
  "body": " Consider the matrix . Suppose we did the following two steps:   Swap Row 1 and Row 2;    Add times Row 1 to Row 2 (and replace Row 2).   That would look like this:   The first step corresponds to the elementary matrix and the second step corresponds to the elementary matrix ( Note: When we made , we started with a brand new identity matrix rather than using .)  Now notice that   "
},
{
  "id": "subsec-ElementaryMatrices-10",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-ElementaryMatrices-10",
  "type": "Example",
  "number": "2.2.17",
  "title": "",
  "body": " If corresponds to adding times Row 1 to Row 3, then the elementary matrix is Then and this corresponds to adding times Row 1 to Row 3.  "
},
{
  "id": "subsec-ElementaryMatrices-15",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-ElementaryMatrices-15",
  "type": "Example",
  "number": "2.2.18",
  "title": "",
  "body": " Consider this matrix and we want to find .  First, let's multiply the top row by to get our leading : This first step corresponds to the elementary matrix   Second, let's add times Row 1 to Row 2 (and replace Row 2) to get a zero below the first leading : This second step corresponds to the elementary matrix   Third, let's multiply the second row by to get our second leading : This third step corresponds to the elementary matrix   Fourth, let's add times Row 2 to Row 1 (and replace Row 1) to put the matrix into reduced row echelon form: This fourth step corresponds to the elementary matrix   So   We can write all of the inverses of the elementary matrices by using the reverse operation on the identity matrix:   The inverse of is .    The inverse of is .    The inverse of is .    The inverse of is .   So   "
},
{
  "id": "subsec-ElementaryMatrices-16",
  "level": "2",
  "url": "sec22-InverseMatrix.html#subsec-ElementaryMatrices-16",
  "type": "Checkpoint",
  "number": "2.2.19",
  "title": "",
  "body": " Write the following matrix AND its inverse as a product of elementary matrices.    Step 1: Swap Row 1 and Row 2 to get This corresponds to the elementary matrix   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get This corresponds to the elementary matrix   Step 3: Multiply Row 2 by to get This corresponds to the elementary matrix   Step 4: Multiply Row 3 by to get This corresponds to the elementary matrix   Step 5: Add times Row 2 to Row 1 (and replace Row 1) to get This corresponds to the elementary matrix   Step 6: Add times Row 3 to Row 1 (and replace Row 1) to get This corresponds to the elementary matrix   Step 7: Add times Row 3 to Row 2 (and replace Row 2) to get This corresponds to the elementary matrix   This tells us that If we multiply those out we see that   And taking the inverse of both sides of the giant product (and using the \"shoes and socks\" rule), we see that So let's find the inverses of each of these matrices by performing the inverse operation on the identity matrix:    swaps Row 1 and Row 2 and that operation is its own inverse (do it twice and you get right back where you started), so .     adds Row 1 to Row 3, and the inverse of that is adding times Row 1 to Row 2, so .     multiplies Row 2 by , and the inverse of that is multiplying Row 2 by , so .     multiplies Row 3 by , and that operation is its own inverse, so .     adds times Row 2 to Row 1, and the inverse of that is adding times Row 2 to Row 1, so .     adds times Row 3 to Row 1, and the inverse of that is adding times Row 3 to Row 1, so .     adds times Row 3 to Row 2, and the inverse of that is adding times Row 3 to Row 2, so .   This means...    "
},
{
  "id": "sec23-InvertibleMatrix",
  "level": "1",
  "url": "sec23-InvertibleMatrix.html",
  "type": "Section",
  "number": "2.3",
  "title": "Characterizations of Invertible Matrices",
  "body": " Characterizations of Invertible Matrices   Up to this point, we have explored various concepts seemingly in isolation: pivot positions, linear independence, span, one-to-one and onto transformations, and matrix equations. In this section, we will bring all of these ideas together under one unified framework: the Invertible Matrix Theorem. Instead of treating these as a list of separate rules to memorize, we will build connections between them from the ground up. You will see how discovering just one piece of information about a square matrix instantly unlocks a wealth of knowledge about its fundamental structure and the linear transformation it defines.    After this section, students will be able to:     relate the core properties of square matrices (such as pivot positions, linear independence, span, and trivial solutions) directly to the concept of invertibility.    construct logical chains of equivalence to justify and prove various components of the Invertible Matrix Theorem.    apply the Invertible Matrix Theorem to quickly deduce the characteristics of a matrix or a system of equations without performing exhaustive row operations.    define an invertible linear transformation and formally link it to the inverse of its standard matrix.      It is super important to be able to tell whether a matrix is invertible. One of the most important theorems in linear algebra is the Invertible Matrix Theorem , which identifies several conditions that are equivalent to a matrix being invertible.   Invertible Matrix Theorem   Let be an matrix. The following statements are equivalent.    is invertible.     is row equivalent to , the identity matrix.     has pivot positions.     has only the trivial solution.    The columns of are linearly independent.    The linear transformation is one-to-one.     is consistent for all .    The columns of span .    The linear transformation maps onto .    There is an matrix such that .    There is an matrix such that .     is invertible.       This big theorem that ties everything we have learned together! If you Google the Invertible Matrix Theorem, there are a lot more equivalent conditions than what we have listed here. Some of them are just rephrasing the conditions using other terminology and some of them requires a bit more linear algebra concepts that we are building towards. We will certainly circle back to this theorem and add more conditions when we learn more!  Your textbook includes a blurb to prove this theorem (by directing us back to various places to find the proofs). Instead of proving them (they are super straightforward!), let's discuss the method to prove such a big theorem!  Proving two statements are equivalent is the same thing as proving a biconditional statement. Let's say we have two statements, and , then \"they are equivalent\" means both \"if then \" and \"if then \". Symbolically, we use the notation \" \" for implication and \" \" for equivalence. So we are proving both and   To prove the invertible matrix theorem, we want to establish a chain of equivalence . That is, we want to link all the statements together using the equivalence notation .  Let's start small! Let's say we have three statements , , and . To prove that they are all equivalent, we need to prove that . One way to do so is to prove (1) , (2) , and (3) . This creates a continuous logical loop! If we assume any one of these statements is true, we can follow the chain of implications to guarantee that the others are also true. Because we can travel from any single statement to every other statement in this cycle, they must all share the exact same truth value.   You will prove the invertible matrix theorem by establishing the chain of implication in Lab Report #3.    Let . We can actually learn a lot by the invertible matrix theorem.  One can very quickly determine that is invertible (because the ). Alternatively, we can solve the homogeneous equation quickly that has only the trivial solution.  And we can draw so many conclusions by the fact that is invertible using the invertible matrix theorem! A couple examples are:    can be row reduced to a identity matrix;     has pivot positions;    The columns of are linearly independent;    The columns of spans ;    The equation is always consistent for every ;    The linear transformation is injective,   And the list goes on!  Recall these are the things that would have taken us hours to figure out before when we didn't know about the invertible matrix theorem!   Recall all the linear transformations we learn from this class can be represented using matrix transformations. That is, we can define the linear transformation by .  If is invertible, then what linear transformation does define?    transforms back to   We see that multiplication of undoes the linear transformation , so the inverse matrix defines the inverse of a linear transformation!    A linear transformation is invertible if there exists a function such that and       Let be a linear transformation with the standard matrix . Then is invertible if and only if is an invertible matrix.  In this case, the linear transformation given by is the unique function satisfying the invertible definition for and is called the inverse of .     Let's say is an injective linear transformation. What can we say about ?   being injective means that the columns of , the standard matrix that defines this linear transformation, are linearly independent . This implies that has pivot positions.  By the invertible matrix theorem, we know that is invertible, and hence, is an invertible linear transformation !  Also by the invertible matrix theorem, the columns of spans the codomain, , and hence must be surjective .  See how powerful the invertible matrix theorem is! Once we know just a bit of information about the matrix\/linear transformation, the invertible matrix theorem will do the rest!    Let be a surjective linear transformation. What can we say about ?   Fancy terminology! A transformation that are both injective and surjective is called a bijection . An immediate result we can get is that a transformation is invertible if and only if it is a bijection !  "
},
{
  "id": "sec23-InvertibleMatrix-2-2",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#sec23-InvertibleMatrix-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     relate the core properties of square matrices (such as pivot positions, linear independence, span, and trivial solutions) directly to the concept of invertibility.    construct logical chains of equivalence to justify and prove various components of the Invertible Matrix Theorem.    apply the Invertible Matrix Theorem to quickly deduce the characteristics of a matrix or a system of equations without performing exhaustive row operations.    define an invertible linear transformation and formally link it to the inverse of its standard matrix.    "
},
{
  "id": "sec23-InvertibleMatrix-3",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#sec23-InvertibleMatrix-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Invertible Matrix Theorem "
},
{
  "id": "thm-InvertibleMatrixTheorem",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#thm-InvertibleMatrixTheorem",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "Invertible Matrix Theorem.",
  "body": " Invertible Matrix Theorem   Let be an matrix. The following statements are equivalent.    is invertible.     is row equivalent to , the identity matrix.     has pivot positions.     has only the trivial solution.    The columns of are linearly independent.    The linear transformation is one-to-one.     is consistent for all .    The columns of span .    The linear transformation maps onto .    There is an matrix such that .    There is an matrix such that .     is invertible.      "
},
{
  "id": "sec23-InvertibleMatrix-11",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#sec23-InvertibleMatrix-11",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": " Let . We can actually learn a lot by the invertible matrix theorem.  One can very quickly determine that is invertible (because the ). Alternatively, we can solve the homogeneous equation quickly that has only the trivial solution.  And we can draw so many conclusions by the fact that is invertible using the invertible matrix theorem! A couple examples are:    can be row reduced to a identity matrix;     has pivot positions;    The columns of are linearly independent;    The columns of spans ;    The equation is always consistent for every ;    The linear transformation is injective,   And the list goes on!  Recall these are the things that would have taken us hours to figure out before when we didn't know about the invertible matrix theorem!  "
},
{
  "id": "sec23-InvertibleMatrix-14",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#sec23-InvertibleMatrix-14",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": "  transforms back to  "
},
{
  "id": "sec23-InvertibleMatrix-15",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#sec23-InvertibleMatrix-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "def-InvertibleLinearTransformation",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#def-InvertibleLinearTransformation",
  "type": "Definition",
  "number": "2.3.4",
  "title": "",
  "body": "  A linear transformation is invertible if there exists a function such that and    "
},
{
  "id": "thm-InvertibleLinearTransformationMatrix",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#thm-InvertibleLinearTransformationMatrix",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "",
  "body": "  Let be a linear transformation with the standard matrix . Then is invertible if and only if is an invertible matrix.  In this case, the linear transformation given by is the unique function satisfying the invertible definition for and is called the inverse of .   "
},
{
  "id": "sec23-InvertibleMatrix-18",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#sec23-InvertibleMatrix-18",
  "type": "Example",
  "number": "2.3.6",
  "title": "",
  "body": " Let's say is an injective linear transformation. What can we say about ?   being injective means that the columns of , the standard matrix that defines this linear transformation, are linearly independent . This implies that has pivot positions.  By the invertible matrix theorem, we know that is invertible, and hence, is an invertible linear transformation !  Also by the invertible matrix theorem, the columns of spans the codomain, , and hence must be surjective .  See how powerful the invertible matrix theorem is! Once we know just a bit of information about the matrix\/linear transformation, the invertible matrix theorem will do the rest!  "
},
{
  "id": "sec23-InvertibleMatrix-19",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#sec23-InvertibleMatrix-19",
  "type": "Checkpoint",
  "number": "2.3.7",
  "title": "",
  "body": " Let be a surjective linear transformation. What can we say about ?  "
},
{
  "id": "sec23-InvertibleMatrix-20",
  "level": "2",
  "url": "sec23-InvertibleMatrix.html#sec23-InvertibleMatrix-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bijection "
},
{
  "id": "sec28-Subspaces",
  "level": "1",
  "url": "sec28-Subspaces.html",
  "type": "Section",
  "number": "2.4",
  "title": "Subspaces of <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " Subspaces of   Near the beginning of the course we learned how to write the solution to a homogeneous system of equations as a linear combination of\"basic vectors\". This was possible because the set of solutions to a homogenous system is a special kind of set of vectors called a subspace .  In this section, we will be focusing on learning about subspaces and related concepts!     After this section, students will be able to:     determine if a set of vectors is a subspace.    define the null space and the column space of a matrix.    define the concept of span and spanning sets.      What is a Subspace?  Subspace, is a subset of a vector space that is also a vector space (under the same operations). Yet we have not formally defined what a vector space is. So let's define what a subspace is without relying on the definition of a vector space!   Subspace of    A set of vectors in is called a subspace if it satisfies the following properties:    S1: The zero vector (note: the notation means \"is an element of\" or \"is in\").     S2: If , then .     S3: If , then for every real number .       Some authors will give a slightly different (but equivalent) definition that replaces S1 with \" is non-empty\". Regardless of what specific definition and author gives, it will always be the case that the subspace is non-empty and includes the zero vector.  Terminology: S2 and S3 are symbolic ways of saying must be closed under (vector) addition and closed under scalar multiplication . So we can define a subspace in words to be a non-empty subset of that is closed under vector addition and scalar multiplication.  If you really want to only use words you can replace with \"a vector space\".   The set consisting of only the zero vector of is always a subspace of .  We can verify that this set satisfies the three properties of a subspace:   Clearly this set satisfies S1 !    Since , this set satisfies S2 !    We learned previously that for any scalar , , so this set satisfies S3 !   This subspace is called the trivial subspace because the only thing in it is the one vector that must be in any vector space.    We have seen that the scalar equation of a plane looks like for some number where is a normal vector for the plane. If the plane goes through the origin , then we have to be able to plug in zero for all of the variables and get equality. That means if the plane goes through the origin. So we know that the equation of a plane through the origin looks like   Claim: This plane is a subspace of !  Let's verify the three properties listed in the definition to prove such a plane is a subspace!    S1: This one is given in the description! Or we can just plug in to check that . Checked!     S2: Suppose and are on the plane. Then Using the distributive property along with some commutativity, we can show that So is also on the plane.     S3: Suppose and suppose is on the plane. Then . Then this implies that Using the distributive, associative, and commutative properties for real numbers, we get which means is also on the plane.       Some non-examples of subspaces    The set of vectors is NOT a subspace of .  This subset fails every requirements:    S1:  is not included.     S2:  is not included in the set.     S3:  is not included in the set.       The set of solutions to the system is NEVER a subspace unless .  Proof: The zero vector is excluded because it can't be a solution to if .       Fundamental Subspaces  In matrix algebra, there are four fundamental subspaces associated to a matrix . We will be focusing on two of these subspaces in this section: the null space and the column space .   Null Space of a Matrix   Let be an matrix. The null space of , denoted , is the set of vectors such that . Symbolically speaking,     Claim: The null space of an matrix is a subspace of .      S1:  , so .     S2: Suppose . Then and . This implies that So .    Suppose and . Then , and so Therefore .      Column Space of a Matrix   Let be an matrix. The column space of , denoted , is the set of all linear combinations of the columns of .     But some textbooks call it the image space...  Some textbooks uses a slightly different terminology and calls the column space the \" image space \". But they are pretty much the same thing!  Here is the definition of the image space from our textbook:   Image Space   Let be an matrix. The image space of , denoted , is the set of all of the possible products of and a vector in . Symbolically speaking,     The word \"image\" actually comes from the linear transformation perspective. The image of is the set of outputs of the linear transformation given by . While \"image\" is the more common term in advanced mathematics, this set is also called the range of the linear transformation.   But why is it the same thing as the column space?   That is because the matrix-vector product can also be expressed as a linear combination of the columns of , where the coefficients come from entries of .  Let's look at the case! Suppose we have a generic matrix and a generic vector . Any vector in the image space of will, by definition, be of the form .  Let . Then This means that the image of consists of all of the linear combinations of the columns of . That is why the image space and the column space are the same thing!   Claim: The column space of an matrix is a subspace of .      S1:  , so there exists a vector in that maps to . Therefore, .     S2: Suppose . By definition, there exist vectors such that and . This implies that Since , we have .     S3: Suppose and . By definition, there exists a vector such that . This implies that Since , we have .     But what about the other two fundamental subspaces? They are actually the null space and column space of the transpose of the matrix!   The row space of a matrix is the column space of the transpose of , denoted .    The left null space of a matrix is the null space of the transpose of , denoted .   As you can imagine, if we master the null space and column space of a matrix, then we can easily understand the row space and left null space by just looking at the transpose of the matrix! Hence, we will be focusing on the null space and column space in this section (and the next section).    Span and Spanning Sets  Recall we learned about spans in the past. This is actually really related to the idea of subspaces!   Span and Spanning Sets   Let be a set of vectors in . The span of , denoted is the set of all linear combinations of the vectors in . Symbolically speaking,   Let . Then is called the spanning set (or generating set) of .     Fun Grammar Warning! \"Span\" is used both as a noun and a verb! The definition here defines the meaning of span as a noun. When it is used as a verb, it means something a bit different. For example, we can say \"the vectors and span \". As a verb, span means \"is\/are a spanning set for\".  This brings us to the big theorem of this section!    The span of a set of vectors is the smallest subspace containing those vectors.    We can look at this theorem in two parts:   The span of a set of vectors is a subspace.    Any subspace containing those vectors must also contain the span of those vectors.     To justify the first part, we can verify the three properties for the span:    S1: The zero vector is just so it is in the span.     S2: If and are both in the span, then there exist real numbers and such that Then So is also in the span.     S3: Suppose and is in the span. Then there exist real numbers such that So, Therefore, is also in the span.   Hence, the span is a subspace!  For the second part, notice that if you look at the definition of subspaces, the conditions are basically designed so that a subspace consists of all of the linear combination of some non-empty set of vectors. In fact we can formalize this observation: Any subspace containing the vectors must also contain all of the linear combinations of those vectors. So it must contain all of the vectors in . Hence, the span is the smallest subspace containing those vectors!  Sometimes we have nice geometric ways to describe subspaces (e.g. a plane containing the origin), but in general the best way (especially in higher dimensions!) is often to give a spanning set. This is nice because non-trivial subspaces of contain infinitely many things, but we only need finitely many vectors to describe a spanning set of a subspace of .   Recall that the null space and column space of a matrix are subspaces! So let's describe them using spanning sets!  Let's say we have a matrix . We want to find its null space and column space.  Let's start by finding the null space! Recall that the null space of is the set of solutions to the homogeneous equation . So let's solve the homogeneous equation first!  Using Gaussian elimination algorithm, the reduced row echelon form of the augmented matrix is Observe that and are free variables (by the lack of a pivot position in the second and fourth columns).  So the solution to the homogeneous equation looks like this, in parametric form: where   Observe that the solutions are some linear combinations of the two vectors and . Hence, the null space of is the span of those two vectors:    NOTE: recall we always write the solution to a homogeneous system in parametric form. Now you know why!  In the next section, we will learn that this spanning set of the null space is actually a basis !  Now let's find the column space of ! By definition, the column space of is the span of the columns of . So we can just write down the columns of and say that   But are all the columns of necessary to span the column space? That is, are there any \"redundant vectors\" in the generating set?  For example, observe that the second column is a constant multiple of the first column, so we would span the same subspace without needing the second column.  Next, we will introduce the idea of a basis to address this question.     Basis  Recall that a span of a set of vectors is the smallest subspace containing those vectors, and the span of those vectors contains all possible linear combinations of those vectors. If the spanning set is linearly dependent, then it contains redundant vectors that don't contribute to the span. We can remove those redundant vectors and still have the same span. For briefness, we only want to keep the necessary vectors that contribute to the span. That is, we want our spanning set to be linearly independent.  This is essentially the basis of a subspace: a linearly independent spanning set that spans the subspace .  That is, the two criteria for a basis are: (1) the set must span the subspace of interest, and (2) the set must be linearly independent. In a more math-y way, we can define a basis as follows:   Basis of a Subspace of   Let be a subspace of . A set of vectors is called a basis of if         is linearly independent.       A basis should only include the necessary vectors that contribute to the span.   Claim: The set is a basis for .  This claim is true because (1) any vector in can be written as a linear combination of these two vectors (so it spans ) and (2) these two vectors are linearly independent.  Alternatively, is also a basis for . But why... Well this set of vectors also satisfies the two criteria for a basis.  (1) Any vector in can be written as a linear combination of these two vectors. Let be an arbitrary vector in . We want to find scalars and such that Solving this system, we obtain: Therefore, any vector in can be written as a linear combination of these two vectors, so they span .  (2) These two vectors are linearly independent. The set only contains two vectors and they are not scalar multiples of each other, so they are linearly independent.   Amazing Fact about bases! If and are both bases of a subspace , then . In other words, every basis of a given subspace contains exactly the same number of vectors.  So for example, there is no such thing as a basis for that contains one or three vectors. They all must contain exactly two vectors!   But Richard... Why is it true?  Well here is a very interesting approach to prove this fact (and this is also usually the approach to prove two quantities are equal in advanced mathematics!).  Let's assume that and are both bases of a subspace . Then has vectors in it and has vectors in it.  The approach goes like this: we want to show that cannot contain more vectors than (so ), and also that cannot contain more vectors than (so ). Then this will force to be true!  Since is a basis of and spans , then .  And since is a basis of and spans , then .  Together, that means .    Recall we introduced the two fundamental subspaces: the null space and the column space. How can we find a basis for them?  Good news! The technique we use to find a spanning set for the null space of a matrix will automatically give us a basis! So we can find a basis of a null space by just doing what we have been doing: solving the homogeneous equation and writing the solution in parametric form. The vectors corresponding to the free variables will form a basis for the null space.   NOTE: The reason why the vectors corresponding to the free variables will automatically form a basis for the null space is because of the nature of the free variables (talk to Richard if you are super interested in it!). So the only way to end up with the wrong number of vectors in the basis is to have the wrong number of free variables.  Yet the basis for the column space is a bit more tricky to find, as there is no guarantee that the columns of a matrix will be linearly independent. However, we can find a basis for the column space by only including the pivot columns , as these column vectors are guaranteed to be linearly independent (so we essentially take out the free variables to make sure only has the trivial solution).   Let's say we have the matrix and this time we want to find a basis for the null space and the column space.  Previously, we solved the homogeneous equation . For our convenience, let's copy down the reduced row echelon form of the augmented matrix:  P.S.: Row echelon form is enough as well since all we need to identify are the pivot columns (or not the pivot columns).  Lets' start with the null space first! The solution to the homogeneous equation , in parametric form, looks like this: where . Hence, the null space of is Since these vectors must be linearly independent (observe the second and the fourth entries of each basis vector! They can't be multiple of each other), then a basis for the null space is .  What about a basis for the column space? Let's stare at the reduced row echelon form of the coefficient matrix part again!  Notice that a pivot position appears in the first, third, and fifth columns. So they do NOT correspond to free variables. Imagine if we remove column 2 and column 4 from the coefficient matrix in the beginning, then we will end up with a homogeneous equation that has no free variable, and hence the columns are linearly independent. Therefore, we can span the column space by just including the first, third, and fifth columns. That is, A basis for the column space is .   Spoiler: You may have noticed that the number of vectors in the basis of the null space and the number of vectors in the basis of the column space add up to the number of columns in the matrix. This is a BIG theorem in linear algebra! We can sense that this is true because we take the columns with pivot positions to form a basis for the column space and use the columns without pivot positions to figure out a basis for the null space. We will focus on this theorem in the next section (more spoiler: this theorem is a fundamental theorem of linear algebra!), as well as learning the formal term to describe the numbers of vectors in a basis (even more spoiler: this is called the dimension!).    "
},
{
  "id": "sec28-Subspaces-2-1",
  "level": "2",
  "url": "sec28-Subspaces.html#sec28-Subspaces-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace "
},
{
  "id": "sec28-Subspaces-3",
  "level": "2",
  "url": "sec28-Subspaces.html#sec28-Subspaces-3",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "  After this section, students will be able to:     determine if a set of vectors is a subspace.    define the null space and the column space of a matrix.    define the concept of span and spanning sets.    "
},
{
  "id": "def-Subspaces",
  "level": "2",
  "url": "sec28-Subspaces.html#def-Subspaces",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Subspace of <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Subspace of    A set of vectors in is called a subspace if it satisfies the following properties:    S1: The zero vector (note: the notation means \"is an element of\" or \"is in\").     S2: If , then .     S3: If , then for every real number .      "
},
{
  "id": "subsec-SubspaceIntro-7",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-SubspaceIntro-7",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": " The set consisting of only the zero vector of is always a subspace of .  We can verify that this set satisfies the three properties of a subspace:   Clearly this set satisfies S1 !    Since , this set satisfies S2 !    We learned previously that for any scalar , , so this set satisfies S3 !   This subspace is called the trivial subspace because the only thing in it is the one vector that must be in any vector space.  "
},
{
  "id": "subsec-SubspaceIntro-8",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-SubspaceIntro-8",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": " We have seen that the scalar equation of a plane looks like for some number where is a normal vector for the plane. If the plane goes through the origin , then we have to be able to plug in zero for all of the variables and get equality. That means if the plane goes through the origin. So we know that the equation of a plane through the origin looks like   Claim: This plane is a subspace of !  Let's verify the three properties listed in the definition to prove such a plane is a subspace!    S1: This one is given in the description! Or we can just plug in to check that . Checked!     S2: Suppose and are on the plane. Then Using the distributive property along with some commutativity, we can show that So is also on the plane.     S3: Suppose and suppose is on the plane. Then . Then this implies that Using the distributive, associative, and commutative properties for real numbers, we get which means is also on the plane.     "
},
{
  "id": "subsec-SubspaceIntro-9",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-SubspaceIntro-9",
  "type": "Example",
  "number": "2.4.4",
  "title": "Some non-examples of subspaces.",
  "body": " Some non-examples of subspaces    The set of vectors is NOT a subspace of .  This subset fails every requirements:    S1:  is not included.     S2:  is not included in the set.     S3:  is not included in the set.       The set of solutions to the system is NEVER a subspace unless .  Proof: The zero vector is excluded because it can't be a solution to if .    "
},
{
  "id": "subsec-FundamentalSubspaces-2",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-FundamentalSubspaces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "null space column space "
},
{
  "id": "def-NullSpace",
  "level": "2",
  "url": "sec28-Subspaces.html#def-NullSpace",
  "type": "Definition",
  "number": "2.4.5",
  "title": "Null Space of a Matrix.",
  "body": " Null Space of a Matrix   Let be an matrix. The null space of , denoted , is the set of vectors such that . Symbolically speaking,    "
},
{
  "id": "subsec-FundamentalSubspaces-5",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-FundamentalSubspaces-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "    S1:  , so .     S2: Suppose . Then and . This implies that So .    Suppose and . Then , and so Therefore .    "
},
{
  "id": "def-ColumnSpace",
  "level": "2",
  "url": "sec28-Subspaces.html#def-ColumnSpace",
  "type": "Definition",
  "number": "2.4.6",
  "title": "Column Space of a Matrix.",
  "body": " Column Space of a Matrix   Let be an matrix. The column space of , denoted , is the set of all linear combinations of the columns of .   "
},
{
  "id": "subsec-FundamentalSubspaces-7",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-FundamentalSubspaces-7",
  "type": "Note",
  "number": "2.4.7",
  "title": "But some textbooks call it the image space....",
  "body": " But some textbooks call it the image space...  Some textbooks uses a slightly different terminology and calls the column space the \" image space \". But they are pretty much the same thing!  Here is the definition of the image space from our textbook:   Image Space   Let be an matrix. The image space of , denoted , is the set of all of the possible products of and a vector in . Symbolically speaking,     The word \"image\" actually comes from the linear transformation perspective. The image of is the set of outputs of the linear transformation given by . While \"image\" is the more common term in advanced mathematics, this set is also called the range of the linear transformation.   But why is it the same thing as the column space?   That is because the matrix-vector product can also be expressed as a linear combination of the columns of , where the coefficients come from entries of .  Let's look at the case! Suppose we have a generic matrix and a generic vector . Any vector in the image space of will, by definition, be of the form .  Let . Then This means that the image of consists of all of the linear combinations of the columns of . That is why the image space and the column space are the same thing!  "
},
{
  "id": "subsec-FundamentalSubspaces-9",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-FundamentalSubspaces-9",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": "    S1:  , so there exists a vector in that maps to . Therefore, .     S2: Suppose . By definition, there exist vectors such that and . This implies that Since , we have .     S3: Suppose and . By definition, there exists a vector such that . This implies that Since , we have .    "
},
{
  "id": "subsec-FundamentalSubspaces-10",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-FundamentalSubspaces-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row space left null space "
},
{
  "id": "def-SpanningSet",
  "level": "2",
  "url": "sec28-Subspaces.html#def-SpanningSet",
  "type": "Definition",
  "number": "2.4.9",
  "title": "Span and Spanning Sets.",
  "body": " Span and Spanning Sets   Let be a set of vectors in . The span of , denoted is the set of all linear combinations of the vectors in . Symbolically speaking,   Let . Then is called the spanning set (or generating set) of .   "
},
{
  "id": "thm-SpanSubspace",
  "level": "2",
  "url": "sec28-Subspaces.html#thm-SpanSubspace",
  "type": "Theorem",
  "number": "2.4.10",
  "title": "",
  "body": "  The span of a set of vectors is the smallest subspace containing those vectors.   "
},
{
  "id": "subsec-SpanningSet-11",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-SpanningSet-11",
  "type": "Example",
  "number": "2.4.11",
  "title": "",
  "body": " Recall that the null space and column space of a matrix are subspaces! So let's describe them using spanning sets!  Let's say we have a matrix . We want to find its null space and column space.  Let's start by finding the null space! Recall that the null space of is the set of solutions to the homogeneous equation . So let's solve the homogeneous equation first!  Using Gaussian elimination algorithm, the reduced row echelon form of the augmented matrix is Observe that and are free variables (by the lack of a pivot position in the second and fourth columns).  So the solution to the homogeneous equation looks like this, in parametric form: where   Observe that the solutions are some linear combinations of the two vectors and . Hence, the null space of is the span of those two vectors:    NOTE: recall we always write the solution to a homogeneous system in parametric form. Now you know why!  In the next section, we will learn that this spanning set of the null space is actually a basis !  Now let's find the column space of ! By definition, the column space of is the span of the columns of . So we can just write down the columns of and say that   But are all the columns of necessary to span the column space? That is, are there any \"redundant vectors\" in the generating set?  For example, observe that the second column is a constant multiple of the first column, so we would span the same subspace without needing the second column.  Next, we will introduce the idea of a basis to address this question.  "
},
{
  "id": "subsec-Basis-3",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-Basis-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basis "
},
{
  "id": "def-Basis",
  "level": "2",
  "url": "sec28-Subspaces.html#def-Basis",
  "type": "Definition",
  "number": "2.4.12",
  "title": "Basis of a Subspace of <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Basis of a Subspace of   Let be a subspace of . A set of vectors is called a basis of if         is linearly independent.      "
},
{
  "id": "subsec-Basis-7",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-Basis-7",
  "type": "Example",
  "number": "2.4.13",
  "title": "",
  "body": " Claim: The set is a basis for .  This claim is true because (1) any vector in can be written as a linear combination of these two vectors (so it spans ) and (2) these two vectors are linearly independent.  Alternatively, is also a basis for . But why... Well this set of vectors also satisfies the two criteria for a basis.  (1) Any vector in can be written as a linear combination of these two vectors. Let be an arbitrary vector in . We want to find scalars and such that Solving this system, we obtain: Therefore, any vector in can be written as a linear combination of these two vectors, so they span .  (2) These two vectors are linearly independent. The set only contains two vectors and they are not scalar multiples of each other, so they are linearly independent.   Amazing Fact about bases! If and are both bases of a subspace , then . In other words, every basis of a given subspace contains exactly the same number of vectors.  So for example, there is no such thing as a basis for that contains one or three vectors. They all must contain exactly two vectors!   But Richard... Why is it true?  Well here is a very interesting approach to prove this fact (and this is also usually the approach to prove two quantities are equal in advanced mathematics!).  Let's assume that and are both bases of a subspace . Then has vectors in it and has vectors in it.  The approach goes like this: we want to show that cannot contain more vectors than (so ), and also that cannot contain more vectors than (so ). Then this will force to be true!  Since is a basis of and spans , then .  And since is a basis of and spans , then .  Together, that means .   "
},
{
  "id": "subsec-Basis-12",
  "level": "2",
  "url": "sec28-Subspaces.html#subsec-Basis-12",
  "type": "Example",
  "number": "2.4.15",
  "title": "",
  "body": " Let's say we have the matrix and this time we want to find a basis for the null space and the column space.  Previously, we solved the homogeneous equation . For our convenience, let's copy down the reduced row echelon form of the augmented matrix:  P.S.: Row echelon form is enough as well since all we need to identify are the pivot columns (or not the pivot columns).  Lets' start with the null space first! The solution to the homogeneous equation , in parametric form, looks like this: where . Hence, the null space of is Since these vectors must be linearly independent (observe the second and the fourth entries of each basis vector! They can't be multiple of each other), then a basis for the null space is .  What about a basis for the column space? Let's stare at the reduced row echelon form of the coefficient matrix part again!  Notice that a pivot position appears in the first, third, and fifth columns. So they do NOT correspond to free variables. Imagine if we remove column 2 and column 4 from the coefficient matrix in the beginning, then we will end up with a homogeneous equation that has no free variable, and hence the columns are linearly independent. Therefore, we can span the column space by just including the first, third, and fifth columns. That is, A basis for the column space is .   Spoiler: You may have noticed that the number of vectors in the basis of the null space and the number of vectors in the basis of the column space add up to the number of columns in the matrix. This is a BIG theorem in linear algebra! We can sense that this is true because we take the columns with pivot positions to form a basis for the column space and use the columns without pivot positions to figure out a basis for the null space. We will focus on this theorem in the next section (more spoiler: this theorem is a fundamental theorem of linear algebra!), as well as learning the formal term to describe the numbers of vectors in a basis (even more spoiler: this is called the dimension!).  "
},
{
  "id": "secA1-MidtermReview",
  "level": "1",
  "url": "secA1-MidtermReview.html",
  "type": "Section",
  "number": "A.1",
  "title": "Midterm Review",
  "body": " Midterm Review   The midterm exam will cover material from Week 1 Day 1 of the class through Week 3 Day 2. That is, it covers material in the following sections:   Systems of Linear Equations    Row Reduction and Echelon Forms     Vector Equations     The Matrix Equation      Solution Sets of Linear Systems     Linear Independence     Introduction to Linear Transformations     The Matrix of a Linear Transformation     Matrix Operations     The Inverse of a Matrix     Characterizations of Invertible Matrices   On this page, you will find review problems for the midterm exam. The final answers are included for each problem. Make sure you spend some time working through these problems and understanding how things work!   A quick reminder: Some class time during the class session before the midterm exam will be a review session. Usually this will be a work day for you to work through some problems together to prepare for the exam. This is also a great opportunity for you to ask questions about anything that is not clear to you!    Systems of Linear Equations   Solve the following system of equations: If the system is consistent, write the solution set as a column vector If the system is inconsistent, explain how you know it.   The solutions are of the form where and are arbitrary constants.     Solve the following system of linear equations: If the system is consistent, write the solution set as a column vector If the system is inconsistent, explain how you know it.   The solution is      Solve the following system of linear equations: If the system is consistent, write the solution set as a column vector If the system is inconsistent, explain how you know it.   The solution is      Solve the following system of equations: If the system is consistent, write the solution set as a linear combination of basic vectors. If the system is inconsistent, explain how you know it.   This one has only the trivial solution      Solve the following system of equations: If the system is consistent, write the solution set as a linear combination of basic vectors. If the system is inconsistent, explain how you know it.   The solutions are of the form , where is an arbitrary constant.     Solve the following system of equations: If the system is consistent, write the solution set as a linear combination of basic vectors. If the system is inconsistent, explain how you know it.   The solutions are of the form , where and are arbitrary constants.      Given the following matrix equivalent to some coefficient matrix , describe all solutions of in parametric vector form.      The solution set in parametric vector form is , where and are arbitrary constants.       The solution set in parametric vector form is , where and are arbitrary constants.       The solution set in parametric vector form is , where , , and are arbitrary constants.       (Reduced) Row Echelon Form   Row reduce the following matrix to reduced row echelon form. Circle the pivot positions (aka the leading s) in the final matrix and in the original matrix, and list the pivot columns (aka columns that contain a leading ).    The reduced row echelon form is . The pivot positions are at and entries. The pivot columns are Column 1 and Column 2.      In the following exercises, find the solutions of the systems whose augmented matrices are given.      The solution in parametric form is , where is an arbitrary constant.       The solution in parametric form is , where and are arbitrary constants.       The solution in parametric vector form is , where and are arbitrary constants.       Vector Equations and Matrix Equation   Solve the following vector equation:   If the system is consistent, write the solution set as a linear combination of the basis vectors. If the system is inconsistent, explain how you know it.         Solve the following matrix equation:   If the system is consistent, write the solution set as a linear combination of the basis vectors. If the system is inconsistent, explain how you know it.   The system is inconsistent.      Linear Independence   Let be a set of vectors in such that   Is this set of vectors linearly independent? Remember to justify your conclusion.   No     Let be a set of vectors in such that   Is this set of vectors linearly independent? Remember to justify your conclusion.   Yes     Let be a set of vectors in such that   Is this set of vectors linearly independent? If not, find the smallest set that spans the same plane.   No.  The smallest set is .      Linear Transformations   Let be a linear transformation defined by , where    Find the value of     Is an image of this linear transformation? Justify your reasoning.              No it is not.        Let be a linear transformation defined by , where Is an image of this transformation? Justify your reasoning.   Yes, since      Let be a linear transformation such that Find          Let be a linear transformation such that Find a matrix such that is defined by the formula          Suppose is a linear transformation such that is a rotation by counterclockwise. Find the standard matrix that defines this transformation. That is, find the matrix such that .         Suppose is a linear transformation such that is a reflection across the line by . Find the standard matrix that defines this transformation. That is, find the matrix such that .          Matrix Operations   Let . Compute          Let , , , , and . Compute the following if possible, and if not possible, explain why.                                                     Impossible. is and is ; addition\/subtraction requires identical dimensions.              Impossible. is and is .                   Impossible. is and is .             Compute the following matrix-vector products:                  Impossible. The number of columns in the matrix (2) does not match the number of entries in the vector (3).             Let , , and . Compute                                                    Let , , and . Compute the following if possible, and if not possible, explain why.                       Impossible. is not a square matrix ( ), so it cannot be multiplied by itself.    Impossible. The number of columns in (3) does not match the number of rows in (2).              Inverses of Matrices (and Related Stuff)   Find the inverse of the following matrix if possible. If not possible, explain why.                                  is not invertible.     is not invertible.             Let and . Solve the equation using .    .     Find the inverse of the following matrix if possible. If not possible, explain why.                       is not invertible.          is not invertible.       Let . Answer the following questions. Remember to justify your conclusions.    What is the size of ?    How many pivot positions does have?    How many solution does the homogeneous equation have?    Is the matrix equation  always consistent for all ?    Do the columns of span ?    Are the columns of linearly independent?    Is invertible?    Is defined by an injection?    Is defined by a surjection?                 Exactly one solution (the trivial solution).    Yes    Yes    Yes    Yes    Yes    Yes       Let . Answer the following questions. Remember to justify your conclusions.    What is the size of ?    How many pivot positions does have?    How many solution does the homogeneous equation have?    Is the matrix equation  always consistent for all ?    Do the columns of span ?    Are the columns of linearly independent?    Is invertible?    Is defined by an injection?    Is defined by a surjection?                 Exactly one solution (the trivial solution).    Yes    Yes    Yes    Yes    Yes    Yes       Let . Answer the following questions. Remember to justify your conclusions.    What is the size of ?    How many pivot positions does have?    How many solution does the homogeneous equation have?    Is the matrix equation  always consistent for all ?    Do the columns of span ?    Are the columns of linearly independent?    Is invertible?    Is defined by an injection?    Is defined by a surjection?                 Infinitely many solutions.    No    No    No    No    No    No       Last but not least, to give you an idea of what the exam will be like, you can find the midterm exam Richard gave to his MTH 261 last term. Feel free to use it as a practice run!   Richard's MTH 261 Midterm Exam on Spring 2026    "
},
{
  "id": "ws-MidtermReview-SystemEquations-2",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-SystemEquations-2",
  "type": "Worksheet Exercise",
  "number": "A.1.1",
  "title": "",
  "body": " Solve the following system of equations: If the system is consistent, write the solution set as a column vector If the system is inconsistent, explain how you know it.   The solutions are of the form where and are arbitrary constants.   "
},
{
  "id": "ws-MidtermReview-SystemEquations-3",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-SystemEquations-3",
  "type": "Worksheet Exercise",
  "number": "A.1.2",
  "title": "",
  "body": " Solve the following system of linear equations: If the system is consistent, write the solution set as a column vector If the system is inconsistent, explain how you know it.   The solution is    "
},
{
  "id": "ws-MidtermReview-SystemEquations-4",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-SystemEquations-4",
  "type": "Worksheet Exercise",
  "number": "A.1.3",
  "title": "",
  "body": " Solve the following system of linear equations: If the system is consistent, write the solution set as a column vector If the system is inconsistent, explain how you know it.   The solution is    "
},
{
  "id": "ws-MidtermReview-SystemEquations-5",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-SystemEquations-5",
  "type": "Worksheet Exercise",
  "number": "A.1.4",
  "title": "",
  "body": " Solve the following system of equations: If the system is consistent, write the solution set as a linear combination of basic vectors. If the system is inconsistent, explain how you know it.   This one has only the trivial solution    "
},
{
  "id": "ws-MidtermReview-SystemEquations-6",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-SystemEquations-6",
  "type": "Worksheet Exercise",
  "number": "A.1.5",
  "title": "",
  "body": " Solve the following system of equations: If the system is consistent, write the solution set as a linear combination of basic vectors. If the system is inconsistent, explain how you know it.   The solutions are of the form , where is an arbitrary constant.   "
},
{
  "id": "ws-MidtermReview-SystemEquations-7",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-SystemEquations-7",
  "type": "Worksheet Exercise",
  "number": "A.1.6",
  "title": "",
  "body": " Solve the following system of equations: If the system is consistent, write the solution set as a linear combination of basic vectors. If the system is inconsistent, explain how you know it.   The solutions are of the form , where and are arbitrary constants.   "
},
{
  "id": "ws-MidtermReview-SystemEquations-8-2",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-SystemEquations-8-2",
  "type": "Worksheet Exercise",
  "number": "A.1.7",
  "title": "",
  "body": "   The solution set in parametric vector form is , where and are arbitrary constants.   "
},
{
  "id": "ws-MidtermReview-SystemEquations-8-3",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-SystemEquations-8-3",
  "type": "Worksheet Exercise",
  "number": "A.1.8",
  "title": "",
  "body": "   The solution set in parametric vector form is , where and are arbitrary constants.   "
},
{
  "id": "ws-MidtermReview-SystemEquations-8-4",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-SystemEquations-8-4",
  "type": "Worksheet Exercise",
  "number": "A.1.9",
  "title": "",
  "body": "   The solution set in parametric vector form is , where , , and are arbitrary constants.   "
},
{
  "id": "ws-MidtermReview-RowEchelonForm-2",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-RowEchelonForm-2",
  "type": "Worksheet Exercise",
  "number": "A.1.1",
  "title": "",
  "body": " Row reduce the following matrix to reduced row echelon form. Circle the pivot positions (aka the leading s) in the final matrix and in the original matrix, and list the pivot columns (aka columns that contain a leading ).    The reduced row echelon form is . The pivot positions are at and entries. The pivot columns are Column 1 and Column 2.   "
},
{
  "id": "ws-MidtermReview-RowEchelonForm-3-2",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-RowEchelonForm-3-2",
  "type": "Worksheet Exercise",
  "number": "A.1.2",
  "title": "",
  "body": "   The solution in parametric form is , where is an arbitrary constant.   "
},
{
  "id": "ws-MidtermReview-RowEchelonForm-3-3",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-RowEchelonForm-3-3",
  "type": "Worksheet Exercise",
  "number": "A.1.3",
  "title": "",
  "body": "   The solution in parametric form is , where and are arbitrary constants.   "
},
{
  "id": "ws-MidtermReview-RowEchelonForm-3-4",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-RowEchelonForm-3-4",
  "type": "Worksheet Exercise",
  "number": "A.1.4",
  "title": "",
  "body": "   The solution in parametric vector form is , where and are arbitrary constants.   "
},
{
  "id": "ws-MidtermReview-TypesEquations-2",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-TypesEquations-2",
  "type": "Worksheet Exercise",
  "number": "A.1.1",
  "title": "",
  "body": " Solve the following vector equation:   If the system is consistent, write the solution set as a linear combination of the basis vectors. If the system is inconsistent, explain how you know it.       "
},
{
  "id": "ws-MidtermReview-TypesEquations-3",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-TypesEquations-3",
  "type": "Worksheet Exercise",
  "number": "A.1.2",
  "title": "",
  "body": " Solve the following matrix equation:   If the system is consistent, write the solution set as a linear combination of the basis vectors. If the system is inconsistent, explain how you know it.   The system is inconsistent.   "
},
{
  "id": "ws-MidtermReview-LinearIndependence-2",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-LinearIndependence-2",
  "type": "Worksheet Exercise",
  "number": "A.1.1",
  "title": "",
  "body": " Let be a set of vectors in such that   Is this set of vectors linearly independent? Remember to justify your conclusion.   No   "
},
{
  "id": "ws-MidtermReview-LinearIndependence-3",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-LinearIndependence-3",
  "type": "Worksheet Exercise",
  "number": "A.1.2",
  "title": "",
  "body": " Let be a set of vectors in such that   Is this set of vectors linearly independent? Remember to justify your conclusion.   Yes   "
},
{
  "id": "ws-MidtermReview-LinearIndependence-4",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-LinearIndependence-4",
  "type": "Worksheet Exercise",
  "number": "A.1.3",
  "title": "",
  "body": " Let be a set of vectors in such that   Is this set of vectors linearly independent? If not, find the smallest set that spans the same plane.   No.  The smallest set is .   "
},
{
  "id": "ws-MidtermReview-LinearTransformations-2",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-LinearTransformations-2",
  "type": "Worksheet Exercise",
  "number": "A.1.1",
  "title": "",
  "body": " Let be a linear transformation defined by , where    Find the value of     Is an image of this linear transformation? Justify your reasoning.              No it is not.      "
},
{
  "id": "ws-MidtermReview-LinearTransformations-3",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-LinearTransformations-3",
  "type": "Worksheet Exercise",
  "number": "A.1.2",
  "title": "",
  "body": " Let be a linear transformation defined by , where Is an image of this transformation? Justify your reasoning.   Yes, since    "
},
{
  "id": "ws-MidtermReview-LinearTransformations-4",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-LinearTransformations-4",
  "type": "Worksheet Exercise",
  "number": "A.1.3",
  "title": "",
  "body": " Let be a linear transformation such that Find        "
},
{
  "id": "ws-MidtermReview-LinearTransformations-5",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-LinearTransformations-5",
  "type": "Worksheet Exercise",
  "number": "A.1.4",
  "title": "",
  "body": " Let be a linear transformation such that Find a matrix such that is defined by the formula        "
},
{
  "id": "ws-MidtermReview-LinearTransformations-6",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-LinearTransformations-6",
  "type": "Worksheet Exercise",
  "number": "A.1.5",
  "title": "",
  "body": " Suppose is a linear transformation such that is a rotation by counterclockwise. Find the standard matrix that defines this transformation. That is, find the matrix such that .       "
},
{
  "id": "ws-MidtermReview-LinearTransformations-7",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-LinearTransformations-7",
  "type": "Worksheet Exercise",
  "number": "A.1.6",
  "title": "",
  "body": " Suppose is a linear transformation such that is a reflection across the line by . Find the standard matrix that defines this transformation. That is, find the matrix such that .       "
},
{
  "id": "ws-MidtermReview-MatrixOperations-2",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-MatrixOperations-2",
  "type": "Worksheet Exercise",
  "number": "A.1.1",
  "title": "",
  "body": " Let . Compute        "
},
{
  "id": "ws-MidtermReview-MatrixOperations-3",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-MatrixOperations-3",
  "type": "Worksheet Exercise",
  "number": "A.1.2",
  "title": "",
  "body": " Let , , , , and . Compute the following if possible, and if not possible, explain why.                                                     Impossible. is and is ; addition\/subtraction requires identical dimensions.              Impossible. is and is .                   Impossible. is and is .           "
},
{
  "id": "ws-MidtermReview-MatrixOperations-4",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-MatrixOperations-4",
  "type": "Worksheet Exercise",
  "number": "A.1.3",
  "title": "",
  "body": " Compute the following matrix-vector products:                  Impossible. The number of columns in the matrix (2) does not match the number of entries in the vector (3).           "
},
{
  "id": "ws-MidtermReview-MatrixOperations-5",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-MatrixOperations-5",
  "type": "Worksheet Exercise",
  "number": "A.1.4",
  "title": "",
  "body": " Let , , and . Compute                                                  "
},
{
  "id": "ws-MidtermReview-MatrixOperations-6",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-MatrixOperations-6",
  "type": "Worksheet Exercise",
  "number": "A.1.5",
  "title": "",
  "body": " Let , , and . Compute the following if possible, and if not possible, explain why.                       Impossible. is not a square matrix ( ), so it cannot be multiplied by itself.    Impossible. The number of columns in (3) does not match the number of rows in (2).           "
},
{
  "id": "ws-MidtermReview-Inverses-2",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-Inverses-2",
  "type": "Worksheet Exercise",
  "number": "A.1.1",
  "title": "",
  "body": " Find the inverse of the following matrix if possible. If not possible, explain why.                                  is not invertible.     is not invertible.           "
},
{
  "id": "ws-MidtermReview-Inverses-3",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-Inverses-3",
  "type": "Worksheet Exercise",
  "number": "A.1.2",
  "title": "",
  "body": " Let and . Solve the equation using .    .   "
},
{
  "id": "ws-MidtermReview-Inverses-4",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-Inverses-4",
  "type": "Worksheet Exercise",
  "number": "A.1.3",
  "title": "",
  "body": " Find the inverse of the following matrix if possible. If not possible, explain why.                       is not invertible.          is not invertible.     "
},
{
  "id": "ws-MidtermReview-Inverses-5",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-Inverses-5",
  "type": "Worksheet Exercise",
  "number": "A.1.4",
  "title": "",
  "body": " Let . Answer the following questions. Remember to justify your conclusions.    What is the size of ?    How many pivot positions does have?    How many solution does the homogeneous equation have?    Is the matrix equation  always consistent for all ?    Do the columns of span ?    Are the columns of linearly independent?    Is invertible?    Is defined by an injection?    Is defined by a surjection?                 Exactly one solution (the trivial solution).    Yes    Yes    Yes    Yes    Yes    Yes     "
},
{
  "id": "ws-MidtermReview-Inverses-6",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-Inverses-6",
  "type": "Worksheet Exercise",
  "number": "A.1.5",
  "title": "",
  "body": " Let . Answer the following questions. Remember to justify your conclusions.    What is the size of ?    How many pivot positions does have?    How many solution does the homogeneous equation have?    Is the matrix equation  always consistent for all ?    Do the columns of span ?    Are the columns of linearly independent?    Is invertible?    Is defined by an injection?    Is defined by a surjection?                 Exactly one solution (the trivial solution).    Yes    Yes    Yes    Yes    Yes    Yes     "
},
{
  "id": "ws-MidtermReview-Inverses-7",
  "level": "2",
  "url": "secA1-MidtermReview.html#ws-MidtermReview-Inverses-7",
  "type": "Worksheet Exercise",
  "number": "A.1.6",
  "title": "",
  "body": " Let . Answer the following questions. Remember to justify your conclusions.    What is the size of ?    How many pivot positions does have?    How many solution does the homogeneous equation have?    Is the matrix equation  always consistent for all ?    Do the columns of span ?    Are the columns of linearly independent?    Is invertible?    Is defined by an injection?    Is defined by a surjection?                 Infinitely many solutions.    No    No    No    No    No    No     "
},
{
  "id": "secA1-MidtermReview-11",
  "level": "2",
  "url": "secA1-MidtermReview.html#secA1-MidtermReview-11",
  "type": "Figure",
  "number": "A.1.1",
  "title": "",
  "body": " Richard's MTH 261 Midterm Exam on Spring 2026   "
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
