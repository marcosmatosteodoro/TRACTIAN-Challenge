import { render, screen } from '@testing-library/react';
import { AssetDetaillsTop } from '../../../../../components/AssetDetails/components';

describe('AssetDetaillsTop', () => {
  it('renders with the correct title', () => {
    render(
      <AssetDetaillsTop title="Test Title" statusIcon={<span>Icon</span>} />,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders with the correct status icon', () => {
    const statusIcon = <span>Icon</span>;
    render(<AssetDetaillsTop title="Test Title" statusIcon={statusIcon} />);

    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('applies the correct styles to the title', () => {
    render(
      <AssetDetaillsTop title="Styled Title" statusIcon={<span>Icon</span>} />,
    );

    const title = screen.getByText('Styled Title');
    expect(title).toHaveStyle('font-weight: 600');
    expect(title).toHaveStyle('font-size: 18px');
    expect(title).toHaveStyle('line-height: 28px');
    expect(title).toHaveStyle('color: #24292F');
  });

  it.skip('applies the correct styles to the component container', () => {
    render(
      <AssetDetaillsTop title="Styled Title" statusIcon={<span>Icon</span>} />,
    );

    const container = screen.getByText('Styled Title').parentElement;
    expect(container).toHaveStyle('width: 100%');
    expect(container).toHaveStyle('height: 56px');
    expect(container).toHaveStyle('padding-left: 16px');
    expect(container).toHaveStyle('border-bottom-color: #D8DFE6');
    expect(container).toHaveStyle('border-bottom-width: 1px');
    expect(container).toHaveStyle('align-items: center');
    expect(container).toHaveStyle('gap: 8px');
  });
});
