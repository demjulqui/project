import { GoogleLogout } from 'react-google-login';

//const clientId = '786066878087-jgnsj8gl3p61sljp3pbbuotj9iremar0.apps.googleusercontent.com';
const clientId = '187234833443-0drcrrgqpabei3mk3f4bjppvsp58j60i.apps.googleusercontent.com';
function Logout() {
	const onSuccess = () => {
		console.log('logout success! Current user:');
	};

	return (
		<div id="signinOutButton">
			<GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess} />
		</div>
	);
}
export default Logout;
