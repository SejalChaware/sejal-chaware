
import { cn } from '../../lib/utils';

export function Button({ children, variant = 'primary', className, href, onClick, ...props }) {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-glass';
  
  if (href) {
    return (
      <a href={href} className={cn(baseClass, variantClass, className)} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={cn(baseClass, variantClass, className)} {...props}>
      {children}
    </button>
  );
}
