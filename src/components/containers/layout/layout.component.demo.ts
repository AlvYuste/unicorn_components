import { UniLayoutComponent } from './layout.component';
import { UniAsideComponent } from '../aside/aside.component';
import { UniBodyComponent } from '../body/body.component';
import { UniHeaderComponent } from '../header/header.component';
import { UniRowComponent } from '../row/row.component';
import { UniRowSpacerComponent } from '../row-spacer/row-spacer.component';
import { UniBoxComponent } from '../box/box.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniLayoutComponent,
        UniBodyComponent,
        UniHeaderComponent,
        UniRowComponent,
        UniRowSpacerComponent,
        UniBoxComponent,
        UniAsideComponent,
    ]
};
const lorem = `
    Est labore fugiat irure aliquip laborum minim ea eu in irure pariatur nulla.
    Incididunt incididunt aute et occaecat ut eiusmod incididunt laboris eu proident
    id minim. Velit exercitation ea amet exercitation officia nisi aliquip tempor.
`;
storiesOf('Layout', module)
    .add('Aside left and body', () => ({
        moduleMetadata, template: `
        <uni-layout>
            <uni-aside position="left"> <h2>Aside</h2> ${lorem} </uni-aside>
            <uni-body> <h2>Body</h2> ${lorem} </uni-body>
        </uni-layout>
    `}))
    .add('Aside right and body', () => ({
        moduleMetadata, template: `
        <uni-layout>
            <uni-body> <h2>Body</h2> ${lorem} </uni-body>
            <uni-aside position="right"> <h2>Aside</h2> ${lorem} </uni-aside>
        </uni-layout>
    `}))
    .add('Header, aside and body', () => ({
        moduleMetadata, template: `
        <uni-header>
            <h2>Header</h2>
        </uni-header>
        <uni-layout>
            <uni-aside position="left"> <h2>Aside</h2> ${lorem} </uni-aside>
            <uni-body> <h2>Body</h2> ${lorem} </uni-body>
        </uni-layout>
    `}))
    .add('Full height body', () => ({
        moduleMetadata, template: `
        <uni-header>
            <h2>Header</h2>
        </uni-header>
        <uni-layout class="has-header">
            <uni-aside position="left"> <h2>Aside</h2> ${lorem} </uni-aside>
            <uni-body> <h2>Body</h2> ${lorem} </uni-body>
        </uni-layout>
    `}))
    .add('Full width-height body', () => ({
        moduleMetadata, template: `
        <uni-header>
            <h2>Header</h2>
        </uni-header>
        <uni-layout class="has-header">
            <uni-aside position="left"> <h2>Aside</h2> ${lorem} </uni-aside>
            <uni-body class="uni-body--full-width"> <h2>Body</h2> ${lorem} </uni-body>
        </uni-layout>
    `}))
    .add('Row of boxes', () => ({
        moduleMetadata, template: `
        <uni-row>
            <uni-box>${lorem}</uni-box>
            <uni-box>${lorem}</uni-box>
            <uni-box>${lorem}</uni-box>
            <uni-box>${lorem}</uni-box>
        </uni-row>
    `}))
    .add('Row spacer', () => ({
        moduleMetadata, template: `
        <uni-row>
            <p>Left side</p>
            <uni-row-spacer></uni-row-spacer>
            <p>Right side</p>
        </uni-row>
    `}))
    .add('Column of boxes', () => ({
        moduleMetadata, template: `
        <uni-row vertical>
            <uni-box>${lorem}</uni-box>
            <uni-box>${lorem}</uni-box>
            <uni-box>${lorem}</uni-box>
            <uni-box>${lorem}</uni-box>
        </uni-row>
    `}))
    ;
