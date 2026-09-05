import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { useSettings } from '@/state/SettingsContext';
import { EmptyState } from '@/components/ui/Primitives';

export default function NotFound() {
  const { lang } = useSettings();
  return (
    <div className="mx-auto max-w-xl py-10">
      <EmptyState
        headingLevel={1}
        icon={<Compass size={24} />}
        title="Sayfa bulunamadı"
        description={lang === 'ar'
          ? 'الصفحة التي تبحث عنها غير موجودة. عد إلى لوحة التحكم وتابع التعلّم.'
          : 'ئەو پەڕەیەی بەدوایدا دەگەڕێیت بوونی نییە. بگەڕێوە بۆ داشبۆرد و بەردەوام بە لە فێربوون.'}
        action={<Link to="/" className="btn-primary">Panele dön</Link>}
      />
    </div>
  );
}
