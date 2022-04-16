import { Component, OnInit } from '@angular/core';
import engravingsenum from '../../../../assets/engravingsenum.json';
import engravings from '../../../../assets/engravings.json';

@Component({
    selector: 'app-engravings-search',
    templateUrl: './engravings-search.component.html',
    styleUrls: ['./engravings-search.component.scss']
})
export class EngravingsSearchComponent implements OnInit {

    private engravingsEnum = engravingsenum;
    private buildSetups = JSON.parse(JSON.stringify(engravings));
    private builds: any;
    private classNormalObject: any;
    public engravingsOptions: any;
    public selectionOne: any;
    public selectionOneString: any;
    public selectionTwo: any;
    public selectionTwoString: any;
    public hasSearched = false;
    public searchData: any;
    public modifier: any;

    constructor() { }

    ngOnInit(): void {
        this.engravingsOptions = this.getOptions();
        this.classNormalObject = {
            ...this.engravingsEnum.Normal,
            ...this.engravingsEnum.Class
        };
        this.createBuildsObject();
    }

    getOptions(): any {
        const normalArray = Object.keys(this.engravingsEnum.Normal);
        const classArray = Object.keys(this.engravingsEnum.Class);
        return normalArray.concat(classArray);
    }

    createBuildsObject() {
        const obj = {};
        for (const className in this.buildSetups) {
            for (const buildName in this.buildSetups[className]) {
                const name = className + ' : ' + buildName;
                Object.assign(obj, { [name]: this.buildSetups[className][buildName] })

            }
        }
        this.builds = JSON.parse(JSON.stringify(obj));
    }

    clearSelectionOne(event: any) {
        this.hasSearched = false;
        if (event === true) {
            this.selectionOne = null;
        }
    }
    clearSelectionTwo(event: any) {
        this.hasSearched = false;
        if (event === true) {
            this.selectionTwo = null;
        }
    }
    changeModifier() {
        this.hasSearched = false;
    }
    findEngravings() {
        this.hasSearched = true;
        this.selectionOneString = this.selectionOne;
        this.selectionTwoString = this.selectionTwo;
        const one = this.classNormalObject[this.selectionOne];
        const two = this.classNormalObject[this.selectionTwo];
        const buildNames = Object.keys(this.builds);
        const returnArray = [];
        for (const name of buildNames) {
            if (this.modifier === 'or') {
                if (this.builds[name].includes(one) || this.builds[name].includes(two)) {
                    const stringArray: string[] = [];

                    if (this.builds[name].includes(one)) {
                        stringArray.push(this.selectionOneString);
                    }
                    if (this.builds[name].includes(two)) {
                        stringArray.push(this.selectionTwoString);
                    }
                    const obj = {
                        [name]: stringArray
                    }
                    returnArray.push(obj);
                }
            } else if (this.modifier === 'and' && !!two) {
                if (this.builds[name].includes(one) && this.builds[name].includes(two)) {
                    const obj = {
                        [name]: 0
                    };
                    returnArray.push(obj);
                }
            } else {
                if (this.builds[name].includes(one)) {
                    const obj = {
                        [name]: 0
                    };
                    returnArray.push(obj);
                }
            }
        }
        this.searchData = Object.assign({}, ...(returnArray.sort()));
    }
    createHeaderString(): string {
        if (this.selectionOneString) {
            if (this.selectionTwoString) {
                return `These [Classes : Builds] use ${this.selectionOneString} ${this.modifier} ${this.selectionTwoString} engraving.`;
            } else {
                return `These [Classes : Builds] use ${this.selectionOneString} engraving.`;
            }
        } else {
            return '';
        }
    }
    searchDataEmpty() {
        return Object.keys(this.searchData).length === 0;
    }
}
