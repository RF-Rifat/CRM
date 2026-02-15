import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Grid, Stack } from '@mantine/core';
import { SpaceCard } from './SpaceCard';

export const AdvertisingSpaces = () => {
  const spaces = [
    { title: 'Rideshare Vehicles' },
    { title: 'StoreFront' },
    { title: 'Food Cart' },
  ];

  return (
    <section className="bg-white py-24">
      <Container>
        <Stack gap={60}>
          <div className="">
            <Typography
              variant="h2"
              color="primary"
              className=" text-3xl leading-tight md:text-[28px]"
            >
              Lorem ipsum dolor sit amet consectetur. Posuere enim <br />
               egestas
              viverra nisi. Mattis augue tincidunt nulla ut.
            </Typography>
          </div>

          <Grid gutter={40}>
            {spaces.map(space => (
              <Grid.Col key={space.title} span={{ base: 12, md: 4 }}>
                <SpaceCard title={space.title} />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </section>
  );
};
