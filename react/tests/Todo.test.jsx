'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';

import { Title } from '../app/Title';

describe('Title', () => {
	it('should render a div with "title" class', () => {
		const titleText = 'some text';
		const component = renderIntoDocument(
			<Title
				todo={ titleText }
			/>
		);
		const todoEle = findRenderedDOMComponentWithClass(component, 'title');
		expect(todoEle).to.be.ok;
	});
});
