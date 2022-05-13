import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function CardS(props) {
	return (
		<span class="square border border-dark">
			<MDBCard style={{ maxWidth: '22rem' }}>
				<MDBCardImage src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} position="top" alt="..." />

				<MDBCardBody>
					<MDBCardTitle>{props.title}</MDBCardTitle>
					<MDBCardText>Data Di Rilascio: {props.release_date}</MDBCardText>
					<hr />
					<MDBCardText>{props.overview || 'No overview available'}</MDBCardText>
					<MDBCardText>punteggio: {props.vote_average || 'nessun Punteggio'}</MDBCardText>
					<MDBBtn href={props.trailer}>Trailer</MDBBtn>
				</MDBCardBody>
			</MDBCard>
		</span>
	);
}
