import { Container, Header, Statistic, Form, StatisticLabel, StatisticValue,Segment,Grid, Icon, Button } from 'semantic-ui-react';

function EntryLine ({isExpense,description,value}) {
    return ( <Segment color={isExpense ? "red":"green"}>
    <Grid columns={3} textAlign='right'>
      <Grid.Row>
        <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
        <Grid.Column width={3} textAlign='right'>{value}$</Grid.Column>
        <Grid.Column width={3}>
          <Icon name="edit" bordered></Icon>
          <Icon name="trash" bordered></Icon>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>);
}

export default EntryLine ;