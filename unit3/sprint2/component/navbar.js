function navbar(){
return
` <div id="container">
<div id="navbar">
<h1>Notes App:</h1>
<h2>SELECT DAY:</h2>
<select id="select">
 
    <option value="day_1">Day 1</option>
    <option value="day_2">Day 2</option>
    <option value="day_3">Day 3</option>
    <option value="day_4">Day 4</option>
    <option value="day_5">Day 5</option>
    <option value="day_6">Day 6</option>
    <option value="day_7">Day 7</option>
    <option value="day_8">Day 8</option>
    <option value="day_9">Day 9</option>
    <option value="day_10">Day 10</option>
    <option value="day_11">Day 11</option>
    <option value="day_12">Day 12</option>
    <option value="day_13">Day 13</option>
    <option value="day_14">Day 14</option>
    <option value="day_15">Day 15</option>
    <option value="day_16">Day 16</option>
</select>

    <h2>ADD NOTES:</h2> <input type="text" id="input" placeholder="Add Notes" style="width:500px">
    <button onclick="addnotes(event)">Add Notes</button>

<select id="shownotes">
    <label>Select Day: </label>
    <option value="day_1">Day 1</option>
    <option value="day_2">Day 2</option>
    <option value="day_3">Day 3</option>
    <option value="day_4">Day 4</option>
    <option value="day_5">Day 5</option>
    <option value="day_6">Day 6</option>
    <option value="day_7">Day 7</option>
    <option value="day_8">Day 8</option>
    <option value="day_9">Day 9</option>
    <option value="day_10">Day 10</option>
    <option value="day_11">Day 11</option>
    <option value="day_12">Day 12</option>
    <option value="day_13">Day 13</option>
    <option value="day_14">Day 14</option>
    <option value="day_15">Day 15</option>
    <option value="day_16">Day 16</option>
</select>
<button onclick="shownotes(event)">Show Notes</button>

</div>
</div>
</div>
<div id="result"></div>`

}
export default navbar
