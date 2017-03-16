import React from 'react';
import { Card, Image, Item } from 'semantic-ui-react';

const newsDescription=[
  'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.'
]

const ArticleView = () => {
    return (
        <div>
            <Card fluid>
                  <Item relaxed>
                    <Item.Content>
                    /* link should be added */
                      <Item.Header as='a'><b>Joel</b></Item.Header>
                      <Item.Description>
                        <p>{newsDescription}</p>
                      </Item.Description>
                    </Item.Content>
                  </Item>
            </Card>
        </div>
    );
};

export default ArticleView;