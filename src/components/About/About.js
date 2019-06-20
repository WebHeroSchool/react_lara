import React from 'react';
import styles from'./About.module.css';

import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';

import PropTypes  from 'prop-types';
import Octokit  from '@octokit/rest';


const octokit = new Octokit();
class About extends React.Component {
	state = {
		isRepoListLoading: true,
		isUserInfoLoading: true
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'LaraAloha'
		}).then(({ data }) => {
			this.setState({
				repoList: data,
				isRepoListLoading: false
			});
		});

		octokit.users.getByUsername({
			username: 'LaraAloha'
		}).then(({ data })=> {
			this.setState({
				infoList: data,
				isUserInfoLoading: false
			});
		});
	}

	render() {
		const { infoList, avatar_url, isRepoListLoading, repoList, isUserInfoLoading } = this.state;

		return(

			<div className={styles.titlewrap}>
				<h1> 
				{ isUserInfoLoading ? 
				<LinearProgress /> : 
				<div>
					{infoList.login}
					<img className={styles.img} src={infoList.avatar_url} />
				</div>
				}					
				</h1>
				My repos:
				{!isRepoListLoading && <ol>
					{repoList.map(repo => (
						<li key={repo.id}>
							<a className={styles.list} href={repo.clone_url}>
								{repo.name}
							</a>
						</li>
					))}
				</ol>}
			</div>
		);
	}

}		

About.propTypes = {
	aboutMe: PropTypes.string
}

export default About;
