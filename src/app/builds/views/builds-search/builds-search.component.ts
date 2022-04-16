import { Component, OnInit } from '@angular/core';
import engravingsenum from '../../../../assets/engravingsenum.json';
import engravings from '../../../../assets/engravings.json';
import builds from '../../../../assets/builds.json';
import statsEnum from '../../../../assets/statsEnum.json';

@Component({
    selector: 'app-builds-search',
    templateUrl: './builds-search.component.html',
    styleUrls: ['./builds-search.component.scss']
})
export class BuildsSearchComponent implements OnInit {

    public builds = JSON.parse(JSON.stringify(builds));
    public classSelection: any;
    public buildSelection: any;
    public classOptions: any;
    public classBuildOptions: any;
    public buildOutput: any;
    public engravingsOptions: any;
    public hasSearched = false;

    constructor() { }

    ngOnInit(): void {
        this.engravingsOptions = this.getEngravingsOptions();
    }

    getEngravingsOptions() {
        return {
            ...engravingsenum.Normal,
            ...engravingsenum.Class
        };
    }


    clearClassSelection(event) {
        this.hasSearched = false;
        if (event === true) {
            this.classSelection = null;
            this.buildSelection = null;
        }
    }

    clearBuildSelection(event) {
        this.hasSearched = false;
        if (event === true) {
            this.buildSelection = null;
        }
    }

    getBuild() {
        this.hasSearched = true;
        this.buildOutput = this.builds[this.classSelection][this.buildSelection];
        const engravingArray = [];
        const statArray = [];
        for (const engraving of this.buildOutput["Engravings"]) {
            engravingArray.push(Object.keys(this.engravingsOptions).find(key => this.engravingsOptions[key] === +engraving));
        }
        for(const stat of this.buildOutput["Stats"]){
            statArray.push(Object.keys(statsEnum).find(key => statsEnum[key] === +stat));
        }
        this.buildOutput.Engravings = engravingArray;
        this.buildOutput.Stats = statArray;
        console.log(this.buildOutput)
    }

}
