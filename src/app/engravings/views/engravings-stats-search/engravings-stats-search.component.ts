import { Component, OnInit } from '@angular/core';
import engravingsenum from '../../../../assets/engravingsenum.json';
import engravings from '../../../../assets/engravings.json';
import builds from '../../../../assets/builds.json';
import statsEnum from '../../../../assets/statsEnum.json';

@Component({
    selector: 'app-engravings-stats-search',
    templateUrl: './engravings-stats-search.component.html',
    styleUrls: ['./engravings-stats-search.component.scss']
})
export class EngravingsStatsSearchComponent implements OnInit {
    public engravingOne: any;
    public engravingModifier = 'and';
    public engravingTwo: any;

    public statOne: any;
    public statModifier = 'and';
    public statTwo: any;

    public engravingsOptions: any;
    public statOptions: any;

    public returnData: any;

    public hasSearched = false;

    constructor() { }

    ngOnInit(): void {
        this.engravingsOptions = this.getEngravingsOptions();
        this.statOptions = this.getStatOptions();
    }

    getEngravingsOptions() {
        return {
            ...engravingsenum.Normal,
            ...engravingsenum.Class
        };
    }
    getStatOptions() {
        return Object.keys(statsEnum);
    }

    changeEngravingOne(event) {
        this.hasSearched = false;
        if (event === true) {
            this.engravingOne = null;
        }
    }
    changeEngravingModifier() {
        this.hasSearched = false;
    }
    changeEngravingTwo(event) {
        this.hasSearched = false;
        if (event === true) {
            this.engravingTwo = null;
        }
    }

    changeStatOne(event) {
        this.hasSearched = false;
        if (event === true) {
            this.statOne = null;
        }
    }
    changeStatModifier() {
        this.hasSearched = false;
    }
    changeStatTwo(event) {
        this.hasSearched = false;
        if (event === true) {
            this.statTwo = null;
        }
    }

    findEngravingsStats() {
        this.hasSearched = true;

        const engravingeOneNumber = this.engravingsOptions[this.engravingOne];
        const engravingeTwoNumber = this.engravingsOptions[this.engravingTwo];

        const returnArray = {};

        for (const className in builds) {
            returnArray[className] = [];
            for (const buildName in builds[className]) {
                if (this.engravingModifier === 'or') {
                    if (builds[className][buildName].Engravings.includes(engravingeOneNumber) ||
                        builds[className][buildName].Engravings.includes(engravingeTwoNumber)) {
                        returnArray[className].push(buildName);
                    }
                } else if (this.engravingModifier === 'and' && !!this.engravingTwo) {
                    if (builds[className][buildName].Engravings.includes(engravingeOneNumber) &&
                        builds[className][buildName].Engravings.includes(engravingeTwoNumber)) {
                        returnArray[className].push(buildName);
                    }

                } else {
                    if (builds[className][buildName].Engravings.includes(engravingeOneNumber)) {
                        returnArray[className].push(buildName)
                    }
                }

            }
        }
        // delete from object where there are no values (i.e. they don't have the engravings)
        for (const name in returnArray) {
            if (returnArray[name].length === 0) {
                delete returnArray[name];
            }
        }

        const returnObj = JSON.parse(JSON.stringify(returnArray))

        for (const className in returnArray) {
            for (const buildName of returnArray[className]) {
                if (this.statModifier === 'or') {
                    if (!builds[className][buildName].Stats.includes(statsEnum[this.statOne]) &&
                        !builds[className][buildName].Stats.includes(statsEnum[this.statTwo])) {
                        const startIndex = returnObj[className].indexOf(buildName);
                        returnObj[className].splice(startIndex, 1);
                    }
                } else if (this.statModifier === 'and' && !!this.statTwo) {
                    if (!builds[className][buildName].Stats.includes(statsEnum[this.statOne]) ||
                        !builds[className][buildName].Stats.includes(statsEnum[this.statTwo])) {
                        const startIndex = returnObj[className].indexOf(buildName);
                        returnObj[className].splice(startIndex, 1);
                    }
                } else {
                    if (!builds[className][buildName].Stats.includes(statsEnum[this.statOne])) {
                        const startIndex = returnObj[className].indexOf(buildName);
                        returnObj[className].splice(startIndex, 1);
                    }
                }
            }
        }

        // delete from object where there are no values (i.e. they don't have the stats)
        for (const name in returnObj) {
            if (returnObj[name].length === 0) {
                delete returnObj[name];
            }
        }

        this.returnData = JSON.parse(JSON.stringify(returnObj));
        console.log(this.returnData)
    }

    buttonDisabled() {
        return !(!!this.engravingOne) || !(!!this.statOne)
    }

    createHeaderString(): string {
        return `These [Classes -> Builds] use 
        [${this.engravingOne} ${!!this.engravingTwo ? this.engravingModifier + " " + this.engravingTwo : ''}] engravings 
        with [${this.statOne} ${!!this.statTwo ? this.statModifier + " " + this.statTwo : ''}] stats.`
        return '';
    }

    searchDataEmpty() {
        return Object.keys(this.returnData).length === 0;
    }

    getBuilds(key) {
        return this.returnData[key];
    }

}
