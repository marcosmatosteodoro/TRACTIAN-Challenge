import { render, screen } from '@testing-library/react';
import { GroupAssetText } from '../../../../../components/AssetDetails/components';

describe('GroupAssetText', () => {
  it('renders with the correct title', () => {
    render(<GroupAssetText title="Test Title">Test Children</GroupAssetText>);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders with the correct children', () => {
    render(<GroupAssetText title="Test Title">Test Children</GroupAssetText>);

    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('applies the correct styles to the title', () => {
    render(
      <GroupAssetText title="Styled Title">Styled Children</GroupAssetText>,
    );

    const title = screen.getByText('Styled Title');
    expect(title).toHaveStyle('font-weight: 600');
    expect(title).toHaveStyle('font-size: 16px');
    expect(title).toHaveStyle('line-height: 24px');
    expect(title).toHaveStyle('color: #24292F');
  });

  it.skip('applies the correct styles to the children container', () => {
    render(
      <GroupAssetText title="Styled Title">Styled Children</GroupAssetText>,
    );

    const childrenContainer = screen.getByText('Styled Children').parentElement;
    expect(childrenContainer).toHaveStyle('display: flex');
    expect(childrenContainer).toHaveStyle('align-items: center');
    expect(childrenContainer).toHaveStyle('gap: 8px');
    expect(childrenContainer).toHaveStyle('font-size: 16px');
    expect(childrenContainer).toHaveStyle('font-weight: 400');
    expect(childrenContainer).toHaveStyle('line-height: 24px');
    expect(childrenContainer).toHaveStyle('color: #88929C');
  });

  it('renders correctly without children', () => {
    render(<GroupAssetText title="No Children" />);

    expect(screen.getByText('No Children')).toBeInTheDocument();
  });
});
