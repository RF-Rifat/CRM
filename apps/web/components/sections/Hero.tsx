import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Grid, Stack } from '@mantine/core';
import { HeroFilters } from './HeroFilters';
import { HeroMapPreview } from './HeroMapPreview';

export const Hero = () => {
  return (
    <section className="to-brand/5 overflow-hidden bg-white pt-30 pb-10">
      <Container>
        <Grid gutter={80} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <HeroFilters />
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
                  advertise on the four doors of rideshare vehicles
                </Typography>
              </Stack>

              
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <HeroMapPreview />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};
