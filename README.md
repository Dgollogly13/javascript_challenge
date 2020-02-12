# Javascript Challenge

The goal of this challenge was to create a custom webpage using UFO sightings data. This challenge was completed exclusively in Javasscript, HTML, and CSS.  

## Getting Started 

I am running this code out of my source code editor, Visual Studio Code. If you would like to preview the webpage, you will need to save all of the files to your local machine and open the index.html document in your web browser. For running the code, you will need a source code editor, such as Visual Studio or equivalent. 

### Analysis and Coding 

We were givin the dataset for the UFO sightings and had to write a JS script to create a table presenting that data on a webpage. We also had to make the table interactive by adding a date filter and button. I first built the table with this JS function:

```
function buildTable (tableData) {
    table.html ("");
    tableData.forEach((tableRow) => {
        var row = table.append("tr")
        Object.values(tableRow).forEach((value) => {
            var dataCell = row.append("td")
            dataCell.text(value)
        })
    })
}
```

This function grabs specific values from the dataset and appends them to the table row by row. Once the table was built I wrote another function to create the button and date filter: 

```
button.on('click', function() {
    d3.event.preventDefault;
    var inputValue = d3.select('#datetime').property('value');
    var ufoDate = ufoData.filter(function(ufo) {
        return ufo.datetime === inputValue;
    });
    buildTable(ufoDate)
});
```

Now in addition to the table being presented on the webpage, users may also filter the dataset as they see fit. 


### Challenges or Additional Opportunities



### Built With

* Javascript
* HTML/CSS

### Authors

* **Dallas Gollogly** - [dgollogly13](https://github.com/dgollogly13)

### Acknowledgments

* Denver University Data Analytics Bootcamp 
