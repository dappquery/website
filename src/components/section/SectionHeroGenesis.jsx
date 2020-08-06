import React from 'react';

import {Hero, Statistic} from '../ui';
import { Countdown } from '../ui/Countdown';
import {Col, Container, Row} from "react-bootstrap";

export function SectionHeroGenesis() {
	return (
		<section className="section-hero text-center">
			<Hero />
			<h3>Genesis Mint Event ends in</h3>
			<div className="mb-6">
				<Countdown />
			</div>
			<div className="mb-3">
				<a className="btn btn-primary" href="#anchorParticipate">Participate</a>
			</div>
			<div className="small">
				<a href={process.env.WHITEPAPER_LINK} rel="noreferrer" target="_blank">Read the Whitepaper</a>
			</div>

			<div className="hero-stats mt-6">
				<Container fluid="md">
					<Row className="text-center text-lg-left">
						<Col lg="3" sm="6" className="mb-4 mb-lg-0">
							<Statistic id="totalReserve" />
						</Col>
						<Col lg="3" sm="6" className="mb-4 mb-lg-0">
							<Statistic id="getCurrentTokenPrice" />
						</Col>
						<Col lg="3" sm="6" className="mb-4 mb-md-0">
							<Statistic id="averagePrice" />
						</Col>
						<Col lg="3" sm="6">
							<Statistic id="getTotalSupply" />
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
}