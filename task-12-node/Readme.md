
## For Unix machines 

The `project` bash script allows you to run some project related commands easily.

The application is run through docker container but for this project you would mostly need access to node/npm and the database. 

To make sure `project` script is executable run the following command in this directory 

`chmod +x project`


### Startup the project

`./project up`

Keep this command running to keep the services working. For other commands open up a new terminal window.

### Start the node project

`./project npm start`

### Node related commands


`./project node <command>`

e.g if you want to run `node -v` you do 

`./project node -v`

### npm related commands

`./project npm <command>`

e.g if you want to run `npm start` you do 

`./project npm start`


## Accessing database

Project includes adminer which should run on [localhost:8080](http://localhost:8080/adminer.php)

Login with username/password mentioned in src/app/config/db.config.js




# Reports Flow 

## Admin Menu Reports

These reports are visible only to those users with underlying Roles with permissions
*   Project Manager (*ROLE_PROJECT_MGR*  ‘projman’),
*   Project View? (*ROLE_PROJECT_VIEW*  'projview'),
*   Finance (*ROLE_FINANCE*  'finance'),
*   Site Admin (*ROLE_SITE_ADMIN*  'siteadmin'),
*   Super Admin (*ROLE_SUPER_ADMIN*  'superadmin')
If the role is just Admin  (*ROLE_ATTR_ADMIN*  ‘admin’), then ‘**Permission Denied**’ statement is echoed to the page


## Activity Summary 
*(legacy\portal\admin\reportsummary.php)*
This section primarily revolves around the Activity Summary, which is located in the 'legacy\portal/admin/reportsummary.php' file. In this section, both the user interface (UI) and data retrieval processes are handled within the 'reportsummary.php' itself.
The program utilizes date selection for obtaining activity data. To achieve this, it makes use of the UserPreferencesService to retrieve user preferences if any stored, else our own custom period selected, regarding the duration or period for fetching summary data. These preferences are selected through a date picker on the UI.
The table displayed presents various points related to activity within the project, with columns spanning across different time periods. In the case of custom time periods, an additional column is included to display data similar to the incoming flow described below for hardcoded days' data.
The predefined days for data collection are based on the last [1, 7, 30, 90, 365, 9999 (All time)] days.

**NOTE**
[The following summary skips through the accounts set as ‘skipped’ in the Settings table   ($_SETTINGS['summaryskip'])]

* *Total Portal Login* data is obtained by querying a history table to fetch the total number of logins for the company, excluding those specified in '$_SETTINGS['summaryskip']'.
* *Different Users Logging In* data is collected using a similar process to the one mentioned above, but only distinct user counts are considered.
* *New Users Logging In* For The First Time are identified within the specified timeframe.
    Distinctions between user groups are made when analyzing Different Customers Logging In.
    Similarly, *New Customers Logging In For The First Time* are identified based on these distinctions.
* *New Orders*: Total are segmented into those originating from *Plunet*, *MyAcclaro*, and the API.
* Several metrics are collected, including *Submitted Files*, *Submitted Words*, *Completed Orders*, *Delivered Files* and *Delivered Words*, all providing insights into the total number of files uploaded, word counts, and order statuses.
* *Files Submitted by Connector* and *Files Delivered by Connector* are evaluated separately, accounting for the same metrics but focused on orders sent using connectors.
* New Order Costs and Completed Order Costs are also assessed.
* Lastly, a Logins Leaderboard is generated based on login count.


## Callbacks 
*(app\Http\Controllers\Admin\AdminReportsController.php)*
Route -  *admin.reports.callback  *                             Url – ‘*/reports/callbacks*''
This feature allows users to receive callbacks when their data undergoes changes.
The UI, located in '*resources\views\admin\pages\admin-callbacks.blade.php*', provides options for selecting date and time as well as the accounts for which callbacks should be visible.
Utilizing the Task table, entries with task type 'callback' within the specified dates are fetched. Alongside this, data from the Accounts Table is retrieved. Subsequently, this data is sent to the 'admin.pages.admin-callback.blade.php' blade file for display.

## Connectors
*(app\Http\Controllers\Admin\AdminReportsController.php)*
Route - * admin.reports.connectors*                               Url – ‘*/reports/connectors*’
This section focuses on data related to connectors, which are utilized to create or upload files within the web app (e.g., Contentful, Drupal, Zendesk, etc.). Users can select a date from the UI, accessed through the '*resources\views\admin\pages\admin-connectors.blade.php*' blade file.
Again, the program utilizes date selection for obtaining activity data.
Files created or uploaded using these connectors are displayed in a table format, showcasing details such as Customer/Company, User, Connector used, and status with Direction as 'submit' from the Files Table.

## Journal
*(app\Http\Controllers\Admin\AdminReportsController.php)*
Route -  *admin.reports.connectors*                               Url – ‘*/reports/connectors*’
Similar to the Connectors section, the Journal section also allows users to select a date for displaying data via the ‘*resources\views\admin\pages\admin-journal.blade.php*’
In this case, data is collected from the History table, and user accounts are associated with these records based on their account IDs and the $action sent with the request. This information is then sent to 'admin.pages.admin-journal' for further processing into the table.











Jnjnwenwjenjwenwnejwnjewnjwee







# Laravel Logs 
*(vendor\rap2hpoutre\laravel-logviewer\src\controllers\LogViewerController.php)*
Index function is used to make the page for Laravel logs, fetching the log files and data as these variables
 data = [ ‘logs' => Data from the Laravel.log files.
        	'folders' => Information regarding any folders existing within the logs ,
        	‘current_folder' => If only the Laravel folder is present, this value is set to NULL,
        	'folder_files' => Files inside the folder, if any,
     	   'files' => Files within the Laravel folder log,
        	'current_file' => The file currently being viewed on the page/UI.,
        	'standardFormat' => Set to true,
        	'structure' => Information on folders and files obtained through $this->log_viewer->foldersAndFiles(),
        	'storage_path' => $this->log_viewer->getStoragePath()]

# Marketo Activity Logs
Route -  *admin.reports. marketo*                                   Url – ‘*/reports/marketo*’
This section retrieves the Activity log of the Marketo connector, gathering data related to uploads and files for users.
To enable this functionality, an account is configured with the Marketo connector through the URL 'admin/account/details/{accountid}/connectors' within the connectors tab. The updateMarketo() function in 'AccountFunctions.php' is utilized for updating the Munchkin ID, Client ID, and Client Secret.
** There are errors in the query made in the file, on selection gives Sql Syntax Error.


# My-Acclaro Info 
*(legacy/portal/admin/admininfo.php)*
Route -  *admin.info*                                                           Url – ‘*/admin/info*’
Uses content in Page Table’s content column for the admininfo to create the info page

# Notifications Log
*(resources\views\admin\reports\admin-notification-report.blade.php)*
Route -  *report.notification.logs*                                   Url – ‘*/reports/notifications*’
The NotificationLogsController is employed to obtain both the view and data for the notifications log page.
The view displays the 'admin-notification.blade' file, where the 'admin-notification.vue' component is invoked to present the data.
 Th data is pertaining the Notifications or reports sent to the accounts that have the email notifications related to the *My Acclaro* Customer Activity including OrderSubmitted Notification, Failed/Add Order Notification, et.
On clicking the View Delivered Notification, we can view the sent notification in the form of Acclaro Modal, using the route url ‘/web-email/html/{logId}’  using the *generateHTMLEmailView* function in *SendgridController* class.






