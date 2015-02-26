The aim of this example is to demo to beginners on how to;
>> unit test for JS With Jasmine.
>> run jasmine test suite with using Karma.
>> generate unit test coverage reports.
>> run static code analysis with JSHInt.
>> automate all the above steps with GRUNT.


To install the required tools, add the items in dependencies in package.json.
open command prompt and run the below command
"npm install"

Once the command has successfully completed, installed items can be viewed in the folder node_modules.
Run the below command to execute all the tasks set in gruntfile.
"grunt"

The coverage reports are generated within coverage folder. Go into the browser specific folder, here iE, and open the index.html file to view report.
The static code analysis report is available in jshint-report.html.
