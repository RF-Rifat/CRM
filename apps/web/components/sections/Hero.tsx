import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Grid, Stack } from '@mantine/core';
import { HeroFilters } from './HeroFilters';
import { HeroMapPreview } from './HeroMapPreview';

export const Hero = () => {
  return (
    <section className="to-brand/5 overflow-hidden bg-gradient-to-br from-white pt-32 pb-20 md:pt-48 md:pb-32">
      <Container>
        <Grid gutter={80} align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="xl">
              <Stack gap="md">
                <Typography
                  variant="h1"
                 
                  color="primary"
                  className="tracking-tight"
                >
                  Advertise on cool spaces
                </Typography>
                <Typography
                  variant="body"
                  color="secondary"
                  className="max-w-lg text-xl"
                >
                  Explore unused spaces across the city — ready to be <br /> 
                  used for
                  advertising.
                </Typography>
              </Stack>

              <HeroFilters />
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <HeroMapPreview />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};
