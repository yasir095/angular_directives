/**
 * Created by yasirmahmood on 12/08/2017.
 */

(function() {
    'use strict';

    angular.module("dash").service("colorGenerator", colorGenerator);

    function colorGenerator()
    {
        this.getRandomColor = function(){
            var color = [this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255)];
            return this.getColor(color);
        };

        this.getColor = function(color)
        {
            var alpha = color[3] || 1;
            color = color.slice(0, 3);

            return {
                backgroundColor: this.rgba(color, 0.2),
                pointBackgroundColor: this.rgba(color, alpha),
                pointHoverBackgroundColor: this.rgba(color, 0.8),
                borderColor: this.rgba(color, alpha),
                pointBorderColor: '#fff',
                pointHoverBorderColor: this.rgba(color, alpha)
            };
        };

        this.getRandomInt = function(min, max)
        {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        this.getColorArray = function(arraySize)
        {
            var colorArray = [];
            for(var i=0; i<arraySize; i++)
            {
                colorArray.push(this.getRandomColor().backgroundColor);
            }

            return colorArray;
        };

        this.rgba = function rgba (color, alpha)
        {
            var useExcanvas = false;
            // rgba not supported by IE8
            return useExcanvas ? 'rgb(' + color.join(',') + ')' : 'rgba(' + color.concat(alpha).join(',') + ')';
        };
    }
}());