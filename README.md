# dfp-user-role-management-ui

Framework: Angular
Generated with Thermo UI Foundation standards.

## Project Structure

This project follows the Thermo standard folder structure:

- `src/app/core/` - Core services, guards, and interceptors
- `src/app/shared/` - Shared components, directives, and pipes
- `src/app/features/` - Feature modules and components
- `src/assets/` - Static assets (images, icons, styles)
- `src/environments/` - Environment-specific configurations

## Development

### HTTPS Development
This project is configured for HTTPS development using self-signed certificates.

### Available Scripts

- `npm run start` - Start development server with HTTPS
- `npm run serve:https` - Start development server with HTTPS
- `npm run serve:http` - Start development server with HTTP
- `npm run build` - Build for production
- `npm run verify:build` - Verify build works
- `npm run verify:serve` - Verify serving works

### Registry Configuration

This project uses the Thermo npm registry. Ensure you have the `ENV_NPMRC_PSW` environment variable set.

## References

- [Thermo HTTPS Local Development](https://confluence.amer.thermo.com/spaces/DHAP/pages/394396996/Using+Angular+CLI+to+serve+over+https+locally)
