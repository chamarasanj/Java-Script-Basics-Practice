--Section 01

# This is for learning Version Controlling

# Step 01. Create a Repository in Git Hub

# Step 03. Create a Folder in the PC

# Step 04. Open the Project Folder in VS Code

# Step 05. Open the Terminal in VS Code (CMD or GIT Bash)

# Step 06. Check the git version using the command git -v

' git -v

# Step 07. Initialize the repo using git init command.

' git init

# Step 08. Check the git status using git status commnd.

'git status

# Step 09. Add the reaquired files to git using git add . Command

To Add the files in the current folder
'git add .

or

To add the files regardless of the folder
'git add -A

# Step 10. Commit the changes using meaningful message (always should be meaningful and relavent)

' git commit -m "Initial Project Commit"

ex: This commit will : Fix the bug in Add Function in math file

# Step 11 . Check if there is existing remote URL

'git remote -v

# Step 12. Add the changes to remote URL

' git remote add origin <remote URL>

'Ex: git remote add origin https://github.com/chamarasanj/Java-Script-Basics-Practice.git

# Step 13 . Check if the remote URL configured without an issue

'git remote -v

# Step 14. Make sure your default branch is main branch

' git branch -M main

# Step 15. Push the local commits(changes) to the remote/cloud branch

'git push -u origin main

# Step 16. Check if the changes are there in the remote branch

'refresh the github remote repository url and check

--- Section 2

# Step 17. Do a change in a file again

# Step 18. Check the file change in VS code by double clicking on the file (this will compare the changes)

# Step 19. Check the file status by giving the command git status (This will lists the changes if there)

'git status

# Step 20. Commit the changes using a proper commit message

'git commit -m "Update the document"

# Step 21. Push the Changes in Existing branch

'git push

# Step 22. Create a new branch called 'dev' from main branch.

'git checkout -b dev

# Step 23. Publish the branch to origin dev

'git push -u origin dev
